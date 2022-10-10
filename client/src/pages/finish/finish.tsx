import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FinishButton,
  FinishCode,
  FinishCodeDigit,
  FinishDecorContainer,
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
        <FinishDecorContainer>
          <FinishDecor src="./assets/question-decor1.png" alt="" index="1" />
          <FinishDecor src="./assets/question-decor2.png" alt="" index="2" />
          <FinishDecor src="./assets/question-decor3.png" alt="" index="3" />
        </FinishDecorContainer>
        {!getRandomCode.isSuccess ? (
          <>
            <h3>
              <FadeIn>Congratulations</FadeIn>
            </h3>
            <FinishCode>
<<<<<<< HEAD:client/src/pages/finish/finish.tsx
              {(getRandomCode.data ?? []).map((digit, index) => {
                return <FinishCodeDigit key={index}>{digit}</FinishCodeDigit>;
              })}
              <FinishCodeDigit>#</FinishCodeDigit>
=======
                {(getRandomCode.data ?? ['?', '?', '?', '?']).map((digit, index) => {
                  return <FinishCodeDigit key={index}>{digit}</FinishCodeDigit>;
                })}
>>>>>>> amends:src/pages/finish/finish.tsx
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
        )
      : <>
        <h3>
          <FadeIn>Better luck next time</FadeIn>
        </h3>
        <p>
          <FadeIn delay={0.75}>
            Play again for your chance to win
          </FadeIn>
        </p>
        <FadeIn delay={1.35}>
          <FinishButton
            src="./assets/start.png"
            alt="Finish"
            onClick={finish}
          />
        </FadeIn>
      </>}
      </QuizFrame>
    </FinishWrapper>
  );
}
