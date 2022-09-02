import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppReset } from "@/components/app/app.styles";
import Home from "@/pages/home/home";
import CategorySelector from "@/pages/category-selector/category-selector";

export default function App() {
  return (
    <React.Suspense fallback="Loading...">
      <AppReset />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category-selector" element={<CategorySelector />} />
      </Routes>
    </React.Suspense>
  );
}
