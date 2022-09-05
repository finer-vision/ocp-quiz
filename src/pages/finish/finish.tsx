import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FinishButton,
  FinishCode,
  FinishCodeDigit,
  FinishDecor,
  FinishWrapper,
} from "@/pages/finish/finish.styles";
import QuizFrame from "@/components/quiz-frame/quiz-frame";
import { useAppState } from "@/state/use-app-state";

export default function Finish() {
  const navigate = useNavigate();

  const finish = React.useCallback(() => {
    useAppState.getState().reset();
    navigate("/");
  }, [navigate]);

  const digits = React.useMemo(() => {
    return useAppState.getState().getCode();
  }, []);

  return (
    <FinishWrapper>
      <QuizFrame>
        <FinishDecor src="./assets/question-decor.png" alt="" />
        <h3>Congratulations</h3>
        <FinishCode>
          {digits.map((digit, index) => {
            return <FinishCodeDigit key={index}>{digit}</FinishCodeDigit>;
          })}
        </FinishCode>
        <p>Enter the code for your chance to instantly win</p>
        <FinishButton src="./assets/start.png" alt="Start" onClick={finish} />
      </QuizFrame>
    </FinishWrapper>
  );
}
