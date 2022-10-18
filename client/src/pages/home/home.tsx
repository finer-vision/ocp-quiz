import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HomeButton,
  HomeContent,
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

export default function Home(props: { resetTimer: () => void }) {
  const [state, setState] = React.useState<HomeState>(HomeState.initial);

  const navigate = useNavigate();
  const controls = useAnimationControls();

  React.useEffect(() => {
    if (state === HomeState.intro) {
      controls.start({
        x: "100vw",
        transition: {},
      });
      var timeout = setTimeout(() => {
        navigate("/category-selector");
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [state, navigate]);

  const [key, setKey] = React.useState(0);

  const refresh = React.useCallback(() => {
    setKey((key) => {
      let nextKey = key + 1;
      if (nextKey > 1000) {
        nextKey = 0;
      }
      return nextKey;
    });
  }, []);

  return (
    <HomeWrapper key={key} state={state} onClick={props.resetTimer}>
      <Events />
      <HomeContent onClick={() => setState(HomeState.intro)}>
        <Header />
        <Sticker animate={controls} src="./assets/sticker.png" />
        <TitleSign />
        {state === HomeState.initial && (
          <HomeButton src="./assets/start.png" alt="START" />
        )}
        <HomeVideo
          animate={controls}
          src="./assets/videos/1.1.webm"
          autoPlay
          muted
          onEnded={refresh}
        />
      </HomeContent>
      <BuildingsParallax />
    </HomeWrapper>
  );
}
