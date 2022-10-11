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
    const questionProgress = useAppState((state) => state.questionProgress);

    return (
        <QuestionCategoryProgress>
        <span>{Math.floor(questionProgress.length/12*100)}%</span>
        <ul>
          {questionProgress.map((state: boolean | null) => {
            const icon = state === true ? "correct" : state === false ? "incorrect" : "incomplete";
            return <li>
              <img
                src={`./assets/progress-${icon}.png`}
              />
            </li>
          })}
          {Array.from(Array(12-questionProgress.length)).map(() => {
            return <li>
            <img
              src={`./assets/progress-incomplete.png`}
            />
          </li>
          })}
        </ul>
      </QuestionCategoryProgress>
    )
}