import React from "react";
import {
  TitleSignBillboard,
  TitleSignScaffolding,
  TitleSignWrapper,
} from "@/components/title-sign/title-sign.styles";

export default function TitleSign() {
  return (
    <TitleSignWrapper>
      <TitleSignScaffolding />
      <TitleSignBillboard />
    </TitleSignWrapper>
  );
}
