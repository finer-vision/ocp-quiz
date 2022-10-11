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
        let questionNumber = parseInt(params.questionNumber as string);
        if (isNaN(questionNumber)) {
          questionNumber = 1;
        }
        return {
          categoryId: params.categoryId,
          questionNumber,
        };
      }, [params]);
    
    const total = 12;

    let categoryIndex = 0;

    const stars: React.ReactNode[] = [];
    const incompleteStars: React.ReactNode[] = [];

    Array.from(Array(total)).map((_, index) => {
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
            answeredQuestion.correctAnswerIndex as number
          ]
        ) {
          stars.push((
            <li key={index}>
              <img
                src={`./assets/progress-correct.png`}
                alt={`${index + 1}`}
              />
            </li>
          ));
        } else {
          stars.push((
            <li key={index}>
              <img
                src={`./assets/progress-incorrect.png`}
                alt={`${index + 1}`}
              />
            </li>
          ));
        }
      } else {
        incompleteStars.push((
          <li key={index}>
            <img
              src={`./assets/progress-incomplete.png`}
              alt={`${index + 1}`}
            />
          </li>
        ));
      }
    })

    return (
        <QuestionCategoryProgress>
        <span>{Math.floor(stars.length/(stars.length+incompleteStars.length)*100)}%</span>
        <ul>
          {stars}
          {incompleteStars}
        </ul>
      </QuestionCategoryProgress>
    )
}