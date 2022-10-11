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
import { useAppState } from "@/state/use-app-state";
import Progress from "@/components/progress/progress";

type Params = {
  categoryId: string;
};

const PASSING_SCORE = 8;

export default function Results() {
  const navigate = useNavigate();
  const questions = useAppState((state) => state.questions);

  const params = useParams<Params>();
  const categoryId = React.useMemo(() => {
    return params.categoryId!;
  }, [params.categoryId]);

  const [score, total] = React.useMemo(() => {
    const { answeredQuestions } = useAppState.getState();
    const score = (answeredQuestions[categoryId] ?? []).reduce(
      (score, question) => {
        const answerIndex = (question.answers as string[]).findIndex((answer) => {
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
    return "You scored";
  }, []);

  const categoriesCompleted = () => {
    let complete = 0;
    for (const categoryId in questions) {
      if (useAppState.getState().isCategoryComplete(categoryId)) {
        complete++;
      }
    }
    return complete;
  }

  const finish = React.useCallback(() => {
    const total = 4;
    if (categoriesCompleted() === total) {
      navigate("/finish");
    } else {
      navigate("/category-selector");
    }
  }, [navigate, questions]);

  return (
    <ResultsWrapper>
      <QuizFrame>
        <ResultsInfo image={categoryId}>
          <ResultsTitle>
            <FadeIn>{getTitle(score)}</FadeIn>
          </ResultsTitle>
          <ResultsScore>
            <FadeIn delay={0.75}>
              {score}/{total}
            </FadeIn>
          </ResultsScore>
          <FadeIn delay={1.25}>
            <Progress/>
          </FadeIn>
          <FadeIn delay={1.75}>
            <ResultsButton
              finish={categoriesCompleted() === 4}
              src={categoriesCompleted() === 4 ? "/assets/finish.png" :"./assets/next-category.png"}
              onClick={finish}
            />
          </FadeIn>
        </ResultsInfo>
        {score >= 3 && 
          <ResultsWellDone src={`./assets/videos/3.${Math.floor(Math.random() * 3) + 1}.mov.webm`} autoPlay loop />
        }
        {score < 3 && 
          <ResultsWellDone src={`./assets/videos/4.${Math.floor(Math.random() * 3) + 1}.mov.webm`} autoPlay loop />
        }
      </QuizFrame>
    </ResultsWrapper>
  );
}
