import React from "react";
import {
  CategoryContent,
  CategoryImage,
  CategoryWrapper,
} from "@/components/category/category.styles";

type Props = {
  title: string;
  id: string;
  onSelect: (id: Props["id"]) => void;
};

export default function Category({ title, id, onSelect }: Props) {
  return (
    <CategoryWrapper onClick={() => onSelect(id)}>
      <CategoryContent>
        <h4 dangerouslySetInnerHTML={{ __html: title }} />
      </CategoryContent>
      <CategoryImage src={`./assets/${id}.png`} />
    </CategoryWrapper>
  );
}
