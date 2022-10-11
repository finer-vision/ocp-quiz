import React from "react";
import { useNavigate } from "react-router-dom";
import config from "@/config/config";
import {
  HomeButton,
  HomeContent,
  HomeIntroVideo,
  HomeVideo,
  HomeWrapper,
} from "@/pages/home/home.styles";
import { HomeState } from "@/types";
import Header from "@/components/header/header";
import Events from "@/components/events/events";
import BuildingsParallax from "@/components/buildings-parallax/buildings-parallax";
import TitleSign from "@/components/title-sign/title-sign";

export default function Home() {
  const [state, setState] = React.useState<HomeState>(HomeState.initial);

  const navigate = useNavigate();

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (state === HomeState.intro) {
        navigate("/category-selector");
      }
    }, 2000);
    return () => clearTimeout(timeout);
  }, [state, navigate]);

  return (
    <HomeWrapper onClick={() => setState(HomeState.intro)} state={state}>
      <Events />
      <HomeContent>
        <Header />
        <TitleSign />
        {state === HomeState.initial && (
          <HomeButton
            src="./assets/start.png"
            alt="START"
          />
        )}
      <HomeVideo src="./assets/videos/1.webm" autoPlay muted loop/>
      </HomeContent>
      <BuildingsParallax />
    </HomeWrapper>
  );
}
