import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CategorySelectorCategories,
  CategorySelectorContent,
  CategorySelectorWrapper,
} from "@/pages/category-selector/category-selector.styles";
import { FadeIn } from "@/styles/elements";
import QuizFrame from "@/components/quiz-frame/quiz-frame";
import Category from "@/components/category/category";

export default function CategorySelector() {
  const navigate = useNavigate();

  const handleSelect = React.useCallback(
    (categoryId: string) => {
      navigate(`/question/${categoryId}/1`);
    },
    [navigate]
  );

  return (
    <CategorySelectorWrapper>
      <QuizFrame>
        <CategorySelectorContent>
          <h3>
            <FadeIn>Select Category</FadeIn>
          </h3>
          <CategorySelectorCategories>
            <Category
              title="Myths <br/>or <br/>Facts"
              id="myths-or-facts"
              onSelect={handleSelect}
            />
            <Category
              title="META <br/>Pop <br/>Culture"
              id="meta-pop-culture"
              onSelect={handleSelect}
            />
            <Category
              title="Our <br/>Hardware"
              id="our-hardware"
              onSelect={handleSelect}
            />
            <Category
              title="Data <br/>Centers"
              id="data-centers"
              onSelect={handleSelect}
            />
          </CategorySelectorCategories>
        </CategorySelectorContent>
      </QuizFrame>
    </CategorySelectorWrapper>
  );
}
