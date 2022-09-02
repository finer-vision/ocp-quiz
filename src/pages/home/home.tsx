import React from "react";
import config from "@/config/config";
import { HomeButton, HomeContent, HomeWrapper } from "@/pages/home/home.styles";
import Header from "@/components/header/header";
import Embed from "@/components/embed/embed";
import BuildingsParallax from "@/components/buildings-parallax/buildings-parallax";
import TitleSign from "@/components/title-sign/title-sign";

export default function Home() {
  return (
    <HomeWrapper>
      <Embed src={config.scheduleEmbed} />
      <HomeContent>
        <Header />
        <TitleSign />
        <BuildingsParallax />
        <HomeButton to="/intro">
          <img src="./assets/start.png" alt="START" />
        </HomeButton>
      </HomeContent>
    </HomeWrapper>
  );
}
