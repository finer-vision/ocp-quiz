import { useAppState } from "@/state/use-app-state";
import React from "react";
import { QuestionCategoryProgress } from "./progress.styles";

export default () => {
  const questionProgress = useAppState((state) => state.questionProgress);
  return (
    <QuestionCategoryProgress>
      <ul>
        {questionProgress.map((state: boolean | null) => {
          const icon =
            state === true
              ? "correct"
              : state === false
              ? "incorrect"
              : "incomplete";
          return (
            <li>
              <img src={`./assets/progress-${icon}.png`} alt="" />
            </li>
          );
        })}
        {Array.from(Array(12 - questionProgress.length)).map((_, index) => {
          return (
            <li key={index}>
              <img src={`./assets/progress-incomplete.png`} alt="" />
            </li>
          );
        })}
      </ul>
    </QuestionCategoryProgress>
  );
};
