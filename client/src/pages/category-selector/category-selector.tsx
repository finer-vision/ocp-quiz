import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CategorySelectorCategories,
  CategorySelectorContent,
  CategorySelectorWrapper,
  QuizVideo
} from "@/pages/category-selector/category-selector.styles";
import { FadeIn } from "@/styles/elements";
import QuizFrame from "@/components/quiz-frame/quiz-frame";
import Category from "@/components/category/category";

export default function CategorySelector(props: {resetTimer: () => void}) {
  const navigate = useNavigate();

  const handleSelect = React.useCallback(
    (categoryId: string) => {
      navigate(`/question/${categoryId}/1`);
    },
    [navigate]
  );

  return (
    <CategorySelectorWrapper onClick={props.resetTimer}>
      <QuizVideo src="./assets/videos/2.mov.webm" autoPlay muted loop/>
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
              title="Sustainability"
              id="sustainability"
              onSelect={handleSelect}
            />
            <Category
              title="Our <br/>Infrastructure"
              id="our-infrastructure"
              onSelect={handleSelect}
            />
          </CategorySelectorCategories>
        </CategorySelectorContent>
      </QuizFrame>
    </CategorySelectorWrapper>
  );
}
