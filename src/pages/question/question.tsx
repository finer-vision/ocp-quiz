import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  QuestionAnswerBoolean,
  QuestionAnswers,
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
  switch (question.type) {
    case "boolean":
      return (
        <QuestionAnswerBoolean>
          {question.answers.map((answer, index) => {
            return (
              <img
                key={index}
                src={`./assets/${answer}.png`}
                alt={answer}
                onClick={() => onSelect(answer)}
              />
            );
          })}
        </QuestionAnswerBoolean>
      );
    case "multi":
      return (
        <ul>
          {question.answers.map((answer, index) => {
            const letter = letters[index];
            return (
              <li key={index} onClick={() => onSelect(answer)}>
                <img src={`./assets/${letter}.png`} alt={letter} />
                <p>{answer}</p>
              </li>
            );
          })}
        </ul>
      );
    default:
      return <></>;
  }
}
