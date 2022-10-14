import React, { useEffect, useRef, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { AppReset } from "@/components/app/app.styles";
import Home from "@/pages/home/home";
import CategorySelector from "@/pages/category-selector/category-selector";
import Results from "@/pages/results/results";
import Question from "@/pages/question/question";
import Finish from "@/pages/finish/finish";

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
      if(timer >= 60000) {
        navigate("/")
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [])

  const resetTimer = () => {
    console.log(timer)
    timer = 0;
  }

  return (
    <React.Suspense fallback="Loading...">
      <AppReset />
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
