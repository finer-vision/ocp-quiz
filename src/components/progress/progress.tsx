import { useAppState } from "@/state/use-app-state";
import React from "react";
import { useParams } from "react-router-dom";
import { QuestionCategoryProgress } from "./progress.styles";
import AllQuestions from "@/config/questions";

type Params = {
    categoryId: string;
    questionNumber: string;
  };


export default () => {
    const answeredQuestions = useAppState((state) => state.answeredQuestions);
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
    
    const [progress, total] = React.useMemo(() => {
        const answered = (answeredQuestions[categoryId] ?? []).length;
        const total = 12;
        return [Math.floor((answered / total) * 100), total];
      }, [categoryId, answeredQuestions]);

    let categoryIndex = 0;

    return (
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
              (answeredQuestions[categoryId] ?? [])[questionIndex] ??
              null;
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
    )
}