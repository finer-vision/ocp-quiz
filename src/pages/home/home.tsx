import React from "react";
import { useNavigate } from "react-router-dom";
import config from "@/config/config";
import {
  HomeButton,
  HomeContent,
  HomeIntroVideo,
  HomeWrapper,
} from "@/pages/home/home.styles";
import { HomeState } from "@/types";
import Header from "@/components/header/header";
import Embed from "@/components/embed/embed";
import BuildingsParallax from "@/components/buildings-parallax/buildings-parallax";
import TitleSign from "@/components/title-sign/title-sign";

export default function Home() {
  const [state, setState] = React.useState<HomeState>(HomeState.initial);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (state === HomeState.end) {
      navigate("/category-selection");
    }
  }, [state, navigate]);

  return (
    <HomeWrapper state={state}>
      <Embed src={config.scheduleEmbed} />
      <HomeContent>
        <Header />
        <TitleSign />
        {state === HomeState.initial && (
          <HomeButton
            src="./assets/start.png"
            alt="START"
            onClick={() => setState(HomeState.intro)}
          />
        )}
        {state === HomeState.intro && (
          <HomeIntroVideo
            src="./assets/intro.webm"
            autoPlay
            onEnded={() => setState(HomeState.end)}
          />
        )}
      </HomeContent>
      <BuildingsParallax />
    </HomeWrapper>
  );
}
