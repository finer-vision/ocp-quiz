import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ResultsButton,
  ResultsInfo,
  ResultsScore,
  ResultsTitle,
  ResultsWellDone,
  ResultsWrapper,
} from "@/pages/results/results.styles";
import { FadeIn } from "@/styles/elements";
import QuizFrame from "@/components/quiz-frame/quiz-frame";
// import questions from "@/config/questions";
import { useAppState } from "@/state/use-app-state";

type Params = {
  categoryId: string;
};

const PASSING_SCORE = 8;

export default function Results() {
  const navigate = useNavigate();
  const questions = useAppState((state) => state.questions);

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
    return [score, (questions[categoryId] ?? []).length];
  }, [categoryId]);

  const getTitle = React.useCallback((score: number): string => {
    if (score >= PASSING_SCORE) return "You Scored";
    return "On no – you only scored";
  }, []);

  const finish = React.useCallback(() => {
    const total = 4;
    let complete = 0;
    for (const categoryId in questions) {
      if (useAppState.getState().isCategoryComplete(categoryId)) {
        complete++;
      }
    }
    if (complete === total) {
      navigate("/finish");
    } else {
      navigate("/category-selector");
    }
  }, [navigate, questions]);

  return (
    <ResultsWrapper>
      <QuizFrame>
        <ResultsInfo>
          <ResultsTitle>
            <FadeIn>{getTitle(score)}</FadeIn>
          </ResultsTitle>
          <ResultsScore>
            <FadeIn delay={0.75}>
              {score}/{total}
            </FadeIn>
          </ResultsScore>
          <FadeIn delay={1.25}>
            <ResultsButton
              src="./assets/next-category.png"
              alt="Start"
              onClick={finish}
            />
          </FadeIn>
        </ResultsInfo>
        <ResultsWellDone src="./assets/well-done.png" alt="Well Done" />
      </QuizFrame>
    </ResultsWrapper>
  );
}
