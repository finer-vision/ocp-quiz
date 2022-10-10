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
  QuestionAnswer
} from "@/pages/question/question.styles";
import { FadeIn } from "@/styles/elements";
import QuizFrame from "@/components/quiz-frame/quiz-frame";
import AllQuestions from "@/config/questions";
import { QuestionData } from "@/types";
import { useAppState } from "@/state/use-app-state";
import Progress from "@/components/progress/progress";

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
    mounted && (
      <QuestionWrapper>
        <QuizFrame>
          <TimerContainer>
            <img src="./assets/0.png" />
            <img src="./assets/0.png" />
            <img src="./assets/colon.png" className="colon" />
            <img src={`./assets/${secs[0]}.png`} />
            <img src={`./assets/${secs[1]}.png`} />
          </TimerContainer>
          <QuestionDecorContainer>
            <QuestionDecor
              src="./assets/question-decor1.png"
              alt=""
              index="1"
            />
            <QuestionDecor
              src="./assets/question-decor2.png"
              alt=""
              index="2"
            />
            <QuestionDecor
              src="./assets/question-decor3.png"
              alt=""
              index="3"
            />
          </QuestionDecorContainer>
          <QuestionContainer>
            <QuestionProgress>
              <FadeIn>
                {questionNumber}/{totalQuestions}
              </FadeIn>
            </QuestionProgress>
            <QuestionTitle {... ((question.question.length > 90 && question.answers.length > 2) ? {
              style: {
                fontSize: '130%'
              }
            }
            : {
              style: {
                fontSize: 'calc(var(--vh) * (5 / 100))'
              }
            })}>
              <FadeIn delay={0.75}>{question.question}</FadeIn>
            </QuestionTitle>
            <QuestionAnswers>
              <Answers question={question} onSelect={handleSelect} />
            </QuestionAnswers>
            <QuestionCategoryProgress>
              <Progress/>
            </QuestionCategoryProgress>
          </QuestionContainer>
        </QuizFrame>
      </QuestionWrapper>
    )
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

  

  return (
    <QuestionAnswerMulti disabled={selectedAnswer !== ""}>
      {(question.answers as string[]).map((answer, index) => {
        const letter = letters[index];
        const correct =
          selectedAnswer === question.answers[question.correctAnswerIndex as number];
        return (
          <FadeIn key={index} delay={1.25 + 0.75 * index}>
            <li onClick={() => setSelectedAnswer(answer)}>
              <img src={`./assets/${letter}.png`} alt={letter} />
              <QuestionAnswer 
              incorrect={selectedAnswer === answer && !correct} 
              correct={((selectedAnswer === answer) || (selectedAnswer && !correct && (question.answers[question.correctAnswerIndex as number] ===
                answer))) as boolean}>
                {answer}
              </QuestionAnswer>
            </li>
          </FadeIn>
        );
      })}
    </QuestionAnswerMulti>
  );
}