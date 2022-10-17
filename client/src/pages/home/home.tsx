import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import config from "@/config/config";
import {
  HomeButton,
  HomeContent,
  HomeIntroVideo,
  HomeVideo,
  HomeWrapper,
  Sticker,
} from "@/pages/home/home.styles";
import { HomeState } from "@/types";
import Header from "@/components/header/header";
import Events from "@/components/events/events";
import BuildingsParallax from "@/components/buildings-parallax/buildings-parallax";
import TitleSign from "@/components/title-sign/title-sign";
import { useAnimationControls } from "framer-motion";

export default function Home(props: {resetTimer: () => void}) {
  const [state, setState] = React.useState<HomeState>(HomeState.initial);

  const navigate = useNavigate();
  const controls = useAnimationControls();

  React.useEffect(() => {
    if(state === HomeState.intro) {
      controls.start({
        x: '100vw',
        transition: {}
      })
      var timeout = setTimeout(() => {
          navigate("/category-selector");
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [state, navigate]);
  

  return (
    <HomeWrapper state={state} onClick={props.resetTimer}>
      <Events />
      <HomeContent onClick={() => setState(HomeState.intro)}>
        <Header />
        <Sticker animate={controls} src="./assets/sticker.png"/>
        <TitleSign />
        {state === HomeState.initial && (
          <HomeButton
            src="./assets/start.png"
            alt="START"
          />
        )}
      <HomeVideo animate={controls} src="./assets/videos/1.1.webm" autoPlay muted loop/>
      </HomeContent>
      <BuildingsParallax />
    </HomeWrapper>
  );
}
