import React, { useEffect, useRef, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { AppReset } from "@/components/app/app.styles";
import Home from "@/pages/home/home";
import CategorySelector from "@/pages/category-selector/category-selector";
import Results from "@/pages/results/results";
import Question from "@/pages/question/question";
import Finish from "@/pages/finish/finish";
import { useAppState } from "@/state/use-app-state";
import styled from "styled-components";

const root = document.querySelector<HTMLDivElement>("#root")!;

let timer = 0;

export default function App() {
  React.useEffect(() => {
    function onResize() {
      const vw = `${root.clientWidth}px`;
      const vh = `${root.clientHeight}px`;
      document.documentElement.style.setProperty("--vw", vw);
      document.documentElement.style.setProperty("--vh", vh);
    }

    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      timer += 1000;
      if(timer >= 100000) {
        navigate("/")
        useAppState.getState().reset();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [])

  const resetTimer = () => {
    timer = 0;
  }

  return (
    <React.Suspense fallback="Loading...">
      <AppReset />
      <EscapeButton 
      onDoubleClick={() => {
        // @ts-ignore
        if(document.fullscreenElement || document.webkitFullscreenElement) {
          document.exitFullscreen();
        } else {
          document.querySelector("body")?.requestFullscreen()
        }
      }}
      >Test</EscapeButton>
      <Routes>
        <Route path="/" element={<Home resetTimer={resetTimer} />} />
        <Route path="/category-selector" element={<CategorySelector resetTimer={resetTimer} />} />
        <Route path="/question/:categoryId/results" element={<Results resetTimer={resetTimer} />} />
        <Route
          path="/question/:categoryId/:questionNumber"
          element={<Question resetTimer={resetTimer} />}
        />
        <Route path="/finish" element={<Finish resetTimer={resetTimer} />} />
      </Routes>
    </React.Suspense>
  );
}


export const EscapeButton = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  height: calc(var(--vh) * (7.61157407407408 / 100));
  width: calc(var(--vw) * (4.61157407407408 / 100));
  opacity: 0;
  cursor: pointer;
  z-index: 100;
`