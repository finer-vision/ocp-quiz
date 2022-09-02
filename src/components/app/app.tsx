import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppReset } from "@/components/app/app.styles";
import Home from "@/pages/home/home";
import CategorySelector from "@/pages/category-selector/category-selector";
import Question from "@/pages/question/question";

export default function App() {
  return (
    <React.Suspense fallback="Loading...">
      <AppReset />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category-selector" element={<CategorySelector />} />
        <Route
          path="/question/:categoryId/:questionNumber"
          element={<Question />}
        />
      </Routes>
    </React.Suspense>
  );
}
