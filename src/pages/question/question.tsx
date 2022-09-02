import React from "react";
import { useParams } from "react-router-dom";
import {
  QuestionTitle,
  QuestionProgress,
  QuestionContainer,
  QuestionDecor,
  QuestionWrapper,
} from "@/pages/question/question.styles";
import QuizFrame from "@/components/quiz-frame/quiz-frame";
import questions from "@/config/questions";

type Params = {
  categoryId: string;
  questionNumber: string;
};

export default function Question() {
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

  return (
    <QuestionWrapper>
      <QuizFrame>
        <QuestionDecor src="./assets/question-decor.png" alt="" />
        <QuestionContainer>
          <QuestionProgress>
            {questionNumber}/{totalQuestions}
          </QuestionProgress>
          <QuestionTitle>{question.question}</QuestionTitle>
        </QuestionContainer>
      </QuizFrame>
    </QuestionWrapper>
  );
}
