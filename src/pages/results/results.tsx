import React from "react";
import { useParams } from "react-router-dom";
import {
  ResultsButton,
  ResultsInfo,
  ResultsScore,
  ResultsTitle,
  ResultsWellDone,
  ResultsWrapper,
} from "@/pages/results/results.styles";
import QuizFrame from "@/components/quiz-frame/quiz-frame";
import questions from "@/config/questions";
import { useAppState } from "@/state/use-app-state";

type Params = {
  categoryId: string;
};

const PASSING_SCORE = 8;

export default function Results() {
  const { categoryId } = useParams<Params>();
  const [score, total] = React.useMemo(() => {
    const { answeredQuestions } = useAppState.getState();
    const score = (answeredQuestions[categoryId] ?? []).reduce(
      (score, question) => {
        const answerIndex = question.answers.findIndex((answer) => {
          return answer === question.answer;
        });
        if (answerIndex === question.correctAnswerIndex) {
          return score + 1;
        }
        return score;
      },
      0
    );
    return [score, questions[categoryId].length];
  }, [categoryId]);

  const getTitle = React.useCallback((score: number): string => {
    if (score >= PASSING_SCORE) return "You Scored";
    return "On no – you only scored";
  }, []);

  return (
    <ResultsWrapper>
      <QuizFrame>
        <ResultsInfo>
          <ResultsTitle>{getTitle(score)}</ResultsTitle>
          <ResultsScore>
            {score}/{total}
          </ResultsScore>
          <ResultsButton src="./assets/start.png" alt="Start" />
        </ResultsInfo>
        <ResultsWellDone src="./assets/well-done.png" alt="Well Done" />
      </QuizFrame>
    </ResultsWrapper>
  );
}
