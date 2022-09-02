import React from "react";
import { HeaderLogo, HeaderWrapper } from "@/components/header/header.styles";

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderLogo src="./assets/logo.webm" muted autoPlay />
    </HeaderWrapper>
  );
}
