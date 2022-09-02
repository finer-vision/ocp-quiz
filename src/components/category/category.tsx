import React from "react";
import {
  CategoryContent,
  CategoryImage,
  CategoryWrapper,
} from "@/components/category/category.styles";
import { useAppState } from "@/state/use-app-state";

type Props = {
  title: string;
  id: string;
  onSelect: (id: Props["id"]) => void;
};

export default function Category({ title, id, onSelect }: Props) {
  const isCategoryComplete = useAppState((state) => state.isCategoryComplete);
  const complete = React.useMemo(() => {
    return isCategoryComplete(id);
  }, [isCategoryComplete, id]);

  return (
    <CategoryWrapper onClick={() => onSelect(id)} complete={complete}>
      <CategoryContent>
        <h4 dangerouslySetInnerHTML={{ __html: title }} />
      </CategoryContent>
      <CategoryImage src={`./assets/${id}.png`} />
    </CategoryWrapper>
  );
}
