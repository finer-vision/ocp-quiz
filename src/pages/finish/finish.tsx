import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FinishButton,
  FinishCode,
  FinishCodeDigit,
  FinishDecor,
  FinishWrapper,
} from "@/pages/finish/finish.styles";
import { FadeIn } from "@/styles/elements";
import QuizFrame from "@/components/quiz-frame/quiz-frame";
import { useAppState } from "@/state/use-app-state";
import trpc from "@/services/trpc";

export default function Finish() {
  const navigate = useNavigate();

  const getRandomCode = trpc.useQuery(["getRandomCode"], {
    retry: false,
    retryOnMount: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const finish = React.useCallback(() => {
    useAppState.getState().reset();
    navigate("/");
  }, [navigate]);

  return (
    <FinishWrapper>
      <QuizFrame>
        <FinishDecor src="./assets/question-decor.png" alt="" />
        {getRandomCode.isSuccess && (
          <>
            <h3>
              <FadeIn>Congratulations</FadeIn>
            </h3>
            <FinishCode>
              {(getRandomCode.data ?? []).map((digit, index) => {
                return <FinishCodeDigit key={index}>{digit}</FinishCodeDigit>;
              })}
            </FinishCode>
            <p>
              <FadeIn delay={1.75}>
                Enter the code for your chance to instantly win
              </FadeIn>
            </p>
            <FadeIn delay={2.5}>
              <FinishButton
                src="./assets/start.png"
                alt="Start"
                onClick={finish}
              />
            </FadeIn>
          </>
        )}
      </QuizFrame>
    </FinishWrapper>
  );
}
