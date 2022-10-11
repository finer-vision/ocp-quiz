import React from "react";
import {
  QuizFrameBorder,
  QuizFrameContainer,
  QuizFrameContent,
  QuizFrameWrapper
} from "@/components/quiz-frame/quiz-frame.styles";
import Header from "@/components/header/header";

type Props = {
  children: React.ReactNode;
};

export default function QuizFrame({ children }: Props) {
  return (
    <QuizFrameWrapper>
      <Header />
      <QuizFrameContainer>
        <QuizFrameBorder />
        <QuizFrameContent>{children}</QuizFrameContent>
      </QuizFrameContainer>
    </QuizFrameWrapper>
  );
}
