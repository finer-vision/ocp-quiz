import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FinishButton,
  FinishCode,
  FinishCodeDigit,
  FinishDecor,
  FinishDecorContainer,
  FinishVideoHappy,
  FinishVideoSad,
  FinishWrapper,
} from "@/pages/finish/finish.styles";
import { FadeIn } from "@/styles/elements";
import QuizFrame from "@/components/quiz-frame/quiz-frame";
import { useAppState } from "@/state/use-app-state";
import Code from "@/components/code/code";

export default function Finish(props: { resetTimer: () => void }) {
  const navigate = useNavigate();
  const { search } = useLocation();

  const finish = React.useCallback(() => {
    useAppState.getState().reset();
    window.location.href = "/";
  }, [navigate]);

  const isWinner = useAppState((state) => {
    if (search === "?forceWin") return true;
    return (
      state.questionProgress.filter((answer) => answer === true).length / 12 >=
      0.5
    );
  });

  return (
    <FinishWrapper onClick={props.resetTimer}>
      <QuizFrame>
        <FinishDecorContainer>
          <FinishDecor src="./assets/question-decor1.png" alt="" index="1" />
          <FinishDecor src="./assets/question-decor2.png" alt="" index="2" />
          <FinishDecor src="./assets/question-decor3.png" alt="" index="3" />
        </FinishDecorContainer>
        {isWinner ? (
          <>
            <h3>
              <FadeIn>Congratulations</FadeIn>
            </h3>
            <FinishCode>
              <Code />
            </FinishCode>
            <p>
              <FadeIn delay={1.75}>
                Try out this code to see if you win an Meta Quest 2
              </FadeIn>
            </p>
            <FadeIn delay={2.5}>
              <FinishButton
                src="./assets/finish.png"
                alt="Start"
                onClick={finish}
              />
            </FadeIn>
            <FinishVideoHappy
              src="./assets/videos/5.1.mov.webm"
              autoPlay={true}
              muted
              loop
            />
          </>
        ) : (
          <>
            <h3 style={{ marginTop: "13%" }}>
              <FadeIn>Better luck next time</FadeIn>
            </h3>
            <p>
              <FadeIn delay={0.75}>Play again for your chance to win</FadeIn>
            </p>
            <FadeIn delay={1.35}>
              <FinishButton
                src="./assets/finish.png"
                alt="Finish"
                onClick={finish}
              />
            </FadeIn>
            <FinishVideoSad
              src="./assets/videos/6.1.mov.webm"
              autoPlay={true}
              muted
              loop
            />
          </>
        )}
      </QuizFrame>
    </FinishWrapper>
  );
}
