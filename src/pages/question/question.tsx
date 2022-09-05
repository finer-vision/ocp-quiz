import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  QuestionAnswerBoolean,
  QuestionAnswerBooleanAnswer,
  QuestionAnswerMulti,
  QuestionAnswers,
  QuestionCategoryProgress,
  QuestionContainer,
  QuestionDecor,
  QuestionProgress,
  QuestionTitle,
  QuestionWrapper,
} from "@/pages/question/question.styles";
import QuizFrame from "@/components/quiz-frame/quiz-frame";
import questions from "@/config/questions";
import { QuestionData } from "@/types";
import { useAppState } from "@/state/use-app-state";

type Params = {
  categoryId: string;
  questionNumber: string;
};

export default function Question() {
  const navigate = useNavigate();
  const params = useParams<Params>();
  const { categoryId, questionNumber } = React.useMemo(() => {
    let questionNumber = parseInt(params.questionNumber);
    if (isNaN(questionNumber)) {
      questionNumber = 1;
    }
    return {
      categoryId: params.categoryId,
      questionNumber,
    };
  }, [params]);
  const totalQuestions = React.useMemo(() => {
    return questions[categoryId].length;
  }, [categoryId]);
  const question = React.useMemo(() => {
    return questions[categoryId].find((question) => {
      return question.id === questionNumber;
    });
  }, [categoryId, questionNumber]);
  const nextQuestion = React.useMemo(() => {
    return (
      questions[categoryId].find((question) => {
        return question.id === questionNumber + 1;
      }) ?? null
    );
  }, [categoryId, questionNumber]);

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
    const answered = (answeredQuestions[categoryId] ?? []).length;
    const total = Object.keys(questions[categoryId]).length;
    return [Math.floor((answered / total) * 100), total];
  }, [categoryId, answeredQuestions]);

  return (
    <QuestionWrapper>
      <QuizFrame>
        <QuestionDecor src="./assets/question-decor.png" alt="" />
        <QuestionContainer>
          <QuestionProgress>
            {questionNumber}/{totalQuestions}
          </QuestionProgress>
          <QuestionTitle>{question.question}</QuestionTitle>
          <QuestionAnswers>
            <Answers question={question} onSelect={handleSelect} />
          </QuestionAnswers>
          <QuestionCategoryProgress>
            <span>{progress}%</span>
            <ul>
              {Array.from(Array(total)).map((_, index) => {
                let status: "incomplete" | "correct" | "incorrect" =
                  "incomplete";
                const question = questions[categoryId][index];
                const answeredQuestion =
                  (answeredQuestions[categoryId] ?? [])[index] ?? null;
                if (answeredQuestion !== null) {
                  if (
                    answeredQuestion.correctAnswerIndex ===
                    question.correctAnswerIndex
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

const letters = ["a", "b", "c"];

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
    }, 1000);
    return () => clearTimeout(timeout);
  }, [selectedAnswer]);

  switch (question.type) {
    case "boolean":
      return (
        <QuestionAnswerBoolean disabled={selectedAnswer !== ""}>
          {question.answers.map((answer, index) => {
            return (
              <QuestionAnswerBooleanAnswer
                selected={selectedAnswer === answer}
                key={index}
                src={`./assets/${answer}.png`}
                alt={answer}
                onClick={() => setSelectedAnswer(answer)}
              />
            );
          })}
        </QuestionAnswerBoolean>
      );
    case "multi":
      return (
        <QuestionAnswerMulti disabled={selectedAnswer !== ""}>
          {question.answers.map((answer, index) => {
            const letter = letters[index];
            return (
              <li key={index} onClick={() => setSelectedAnswer(answer)}>
                <img src={`./assets/${letter}.png`} alt={letter} />
                <p>
                  {selectedAnswer === answer && (
                    <img src="./assets/multi-answered.png" alt="" />
                  )}
                  {answer}
                </p>
              </li>
            );
          })}
        </QuestionAnswerMulti>
      );
    default:
      return <></>;
  }
}
