import React from "react";
import {
  BuildingsParallaxBack,
  BuildingsParallaxFront,
  BuildingsParallaxWrapper,
} from "@/components/buildings-parallax/buildings-parallax.styles";

export default function BuildingsParallax() {
  return (
    <BuildingsParallaxWrapper>
      <BuildingsParallaxBack />
      <BuildingsParallaxFront />
    </BuildingsParallaxWrapper>
  );
}
