import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  QuestionAnswerBoolean,
  QuestionAnswerBooleanAnswer,
  QuestionAnswerMulti,
  QuestionAnswers,
  QuestionCategoryProgress,
  QuestionContainer,
  QuestionDecorContainer,
  QuestionDecor,
  QuestionProgress,
  QuestionTitle,
  QuestionWrapper,
  TimerContainer,
} from "@/pages/question/question.styles";
import { FadeIn } from "@/styles/elements";
import QuizFrame from "@/components/quiz-frame/quiz-frame";
import AllQuestions from "@/config/questions";
import { QuestionData } from "@/types";
import { useAppState } from "@/state/use-app-state";

type Params = {
  categoryId: string;
  questionNumber: string;
};

type Questions = {
  [prop: string]: QuestionData[];
};

export default function Question() {
  const navigate = useNavigate();
  const params = useParams<Params>();
  const { categoryId, questionNumber } = React.useMemo(() => {
    let questionNumber = parseInt(params.questionNumber!);
    if (isNaN(questionNumber)) {
      questionNumber = 1;
    }
    return {
      categoryId: params.categoryId!,
      questionNumber,
    };
  }, [params]);
  const selectedQuestions = useAppState((state) => state.questions);
  const [questions, setQuestions] =
    React.useState<Questions>(selectedQuestions);

  const [mounted, setMounted] = React.useState(false);
  const [secs, setSecs] = React.useState(["3", "0"]);

  React.useEffect(() => {
    let question: QuestionData[] = [];

    // pick randome question on the list
    for (var i = 1; i < 4; i++) {
      var idx = Math.floor(Math.random() * AllQuestions[categoryId].length);
      question.push({
        ...AllQuestions[categoryId][idx],
        id: i, // id will be assigned to 1,2,3
      });
      AllQuestions[categoryId].splice(idx, 1);
    }

    useAppState.getState().question(categoryId, question);

    setQuestions((questions) => {
      if (questions[categoryId] !== undefined) {
        return {
          ...questions,
          [categoryId]: [...question],
        };
      } else {
        return {
          ...questions,
          [categoryId]: [...question],
        };
      }
    });
    setMounted(true);
  }, [categoryId]);

  const totalQuestions = React.useMemo(() => {
    if (!mounted) return;
    return questions[categoryId].length;
  }, [categoryId, mounted]);
  const question = React.useMemo(() => {
    return (questions[categoryId] ?? []).find((question) => {
      return question.id === questionNumber;
    })!;
  }, [categoryId, questionNumber, mounted]);
  const nextQuestion = React.useMemo(() => {
    if (!mounted) return;
    return (
      (questions[categoryId] ?? []).find((question) => {
        return question.id === questionNumber + 1;
      }) ?? null
    );
  }, [categoryId, questionNumber, mounted]);

  const handleSelect = React.useCallback(
    (answer: string) => {
      useAppState.getState().answerQuestion(categoryId, question, answer);
      if (nextQuestion === null) {
        navigate(`/question/${categoryId}/results`);
      } else {
        navigate(`/question/${categoryId}/${question.id + 1}`);
      }
    },
    [categoryId, question, navigate, nextQuestion]
  );

  const answeredQuestions = useAppState((state) => state.answeredQuestions);

  const [progress, total] = React.useMemo(() => {
    if (!mounted) return [];
    const answered = (answeredQuestions[categoryId] ?? []).length;
    const total = 12;
    return [Math.floor((answered / total) * 100), total];
  }, [categoryId, answeredQuestions, mounted]);

  let categoryIndex = 0;

  React.useEffect(() => {
    var timeLeft = 30;

    const interval = setInterval(() => {
      if (timeLeft == -1) {
        console.log("end");
        clearInterval(interval);
      } else {
        if (timeLeft < 10) {
          setSecs(["0", timeLeft.toString()]);
        } else {
          setSecs(Array.from(timeLeft.toString()));
        }
        timeLeft--;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return <></>;

  return (
    <QuestionWrapper>
      <QuizFrame>
        <TimerContainer>
          <img alt="" src="./assets/0.png" />
          <img alt="" src="./assets/0.png" />
          <img alt="" src="./assets/colon.png" className="colon" />
          <img alt="" src={`./assets/${secs[0]}.png`} />
          <img alt="" src={`./assets/${secs[1]}.png`} />
        </TimerContainer>
        <QuestionDecorContainer>
          <QuestionDecor src="./assets/question-decor1.png" alt="" index="1" />
          <QuestionDecor src="./assets/question-decor2.png" alt="" index="2" />
          <QuestionDecor src="./assets/question-decor3.png" alt="" index="3" />
        </QuestionDecorContainer>
        <QuestionContainer>
          <QuestionProgress>
            <FadeIn>
              {questionNumber}/{totalQuestions}
            </FadeIn>
          </QuestionProgress>
          <QuestionTitle>
            <FadeIn delay={0.75}>{question.question}</FadeIn>
          </QuestionTitle>
          <QuestionAnswers>
            <Answers question={question} onSelect={handleSelect} />
          </QuestionAnswers>
          <QuestionCategoryProgress>
            <span>{progress}%</span>
            <ul>
              {Array.from(Array(total)).map((_, index) => {
                let status: "incomplete" | "correct" | "incorrect" =
                  "incomplete";
                const questionIndex = index % 3; // return 0,1,2
                const categories = Object.keys(AllQuestions);
                if (index % 3 === 0 && index !== 0) {
                  categoryIndex++;
                }

                const categoryId = categories[categoryIndex];

                const answeredQuestion =
                  (answeredQuestions[categoryId] ?? [])[questionIndex] ?? null;
                if (answeredQuestion !== null) {
                  if (
                    answeredQuestion.answer ===
                    answeredQuestion.answers[
                      answeredQuestion.correctAnswerIndex
                    ]
                  ) {
                    status = "correct";
                  } else {
                    status = "incorrect";
                  }
                }
                return (
                  <li key={index}>
                    <img
                      src={`./assets/progress-${status}.png`}
                      alt={`${index + 1}`}
                    />
                  </li>
                );
              })}
            </ul>
          </QuestionCategoryProgress>
        </QuestionContainer>
      </QuizFrame>
    </QuestionWrapper>
  );
}

const letters = ["a", "b", "c", "d"];

type AnswersProps = {
  question: QuestionData;
  onSelect: (answer: string) => void;
};

function Answers({ question, onSelect }: AnswersProps) {
  const onSelectRef = React.useRef(onSelect);
  React.useMemo(() => {
    onSelectRef.current = onSelect;
  }, [onSelect]);

  const [selectedAnswer, setSelectedAnswer] = React.useState<string>("");

  React.useEffect(() => {
    if (selectedAnswer === "") return;
    const timeout = setTimeout(() => {
      onSelectRef.current(selectedAnswer);
      setSelectedAnswer("");
    }, 1000);
    return () => clearTimeout(timeout);
  }, [selectedAnswer]);

  switch (question.type) {
    case "boolean":
      return (
        <QuestionAnswerBoolean disabled={selectedAnswer !== ""}>
          {question.answers.map((answer, index) => {
            return (
              <FadeIn key={index} delay={1.25 + 0.75 * index}>
                <QuestionAnswerBooleanAnswer
                  selected={selectedAnswer === answer}
                  src={`./assets/${answer}.png`}
                  alt={answer}
                  onClick={() => setSelectedAnswer(answer)}
                />
              </FadeIn>
            );
          })}
        </QuestionAnswerBoolean>
      );
    case "multi":
      return (
        <QuestionAnswerMulti disabled={selectedAnswer !== ""}>
          {question.answers.map((answer, index) => {
            const letter = letters[index];
            const correct =
              selectedAnswer === question.answers[question.correctAnswerIndex];
            return (
              <FadeIn key={index} delay={1.25 + 0.75 * index}>
                <li onClick={() => setSelectedAnswer(answer)}>
                  <img src={`./assets/${letter}.png`} alt={letter} />
                  <p>
                    {selectedAnswer === answer && correct && (
                      <img src="./assets/multi-answered.png" alt="" />
                    )}

                    {selectedAnswer === answer && !correct && (
                      <img src="./assets/multi-answered-incorrect.png" alt="" />
                    )}

                    {!correct &&
                      selectedAnswer &&
                      question.answers[question.correctAnswerIndex] ===
                        answer && (
                        <img src="./assets/multi-answered.png" alt="" />
                      )}
                    {answer}
                  </p>
                </li>
              </FadeIn>
            );
          })}
        </QuestionAnswerMulti>
      );
    default:
      return <></>;
  }
}
