import React from "react";
import config from "@/config/config";
import { HomeContent, HomeWrapper } from "@/pages/home/home.styles";
import Header from "@/components/header/header";
import Embed from "@/components/embed/embed";
import BuildingsParallax from "@/components/buildings-parallax/buildings-parallax";

export default function Home() {
  return (
    <HomeWrapper>
      <Embed src={config.scheduleEmbed} />
      <HomeContent>
        <Header />
        <BuildingsParallax />
      </HomeContent>
    </HomeWrapper>
  );
}
