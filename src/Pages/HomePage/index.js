import React, { useState, useRef, useLayoutEffect } from "react";
import * as Styled from "./HomePage.styled";
import AboutMe from "Sections/AboutMe";
import Skills from "Sections/Skills";
import PortfolioSection from "Sections/PortfolioSection";
import Contact from "Sections/Contact";
import Footer from "Sections/Footer";
import useOnScreen from "Hooks/useOnScreen";

import layer_1 from "Images/parallax/MoutainsLayerOne.png";
import layer_2 from "Images/parallax/layer_2.svg";
import layer_3 from "Images/parallax/layer_3.svg";
import layer_4 from "Images/parallax/layer_4.svg";
import Cloud from "Images/cloud.svg";

import styled from "styled-components";

const Parallax = styled.div`
  perspective: 100px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  position: absolute;
  top: 0;
  left: 50%;
  right: 0;
  bottom: 0;
  margin-left: -1500px;
`;

const HomePage = () => {
  const [imagesLoaded, setImagesLoaded] = useState([]);
  const ref = useRef();
  const scrollRef = useRef();

  const onScreen = useOnScreen(ref, "1000px");
  useLayoutEffect(() => scrollRef.current.scrollTo(0, 1000), []);
  useLayoutEffect(() => console.log("useLayouteffect", scrollRef));

  return (
    <Styled.HomePage ref={ref}>
      <Styled.FadeInAndOutOfPages fadeIn={!!(imagesLoaded.length < 5)} />

      <Parallax>
        <Styled.ParallaxLayerOne>
          <Styled.BackgroundInnerShadow>
            <Styled.Box>
              <Styled.HeadingContainer show={true}>
                <Styled.CloudOne
                  src={Cloud}
                  alt="cloud"
                  height={55}
                  onLoad={() => setImagesLoaded([...imagesLoaded, "cloud"])}
                  show={true}
                  opacityDelayTime={0.8}
                />
                <Styled.Heading onScreen={onScreen}>
                  RODNEY CUMMING
                </Styled.Heading>
                <Styled.SubHeading onScreen={onScreen}>
                  Developer
                </Styled.SubHeading>
                <Styled.CloudTwo
                  src={Cloud}
                  alt="cloud"
                  height={55}
                  show={true}
                  opacityDelayTime={0.8}
                />
              </Styled.HeadingContainer>
            </Styled.Box>
          </Styled.BackgroundInnerShadow>
        </Styled.ParallaxLayerOne>
        <Styled.ParallaxLayerTwo>
          <Styled.Image
            src={layer_1}
            height="455px"
            width="3000px"
            className="parallax__img"
            alt="mountains"
            onLoad={() => setImagesLoaded([...imagesLoaded, "layer1"])}
            show={true}
            opacityDelayTime={1.2}
          />
        </Styled.ParallaxLayerTwo>
        <Styled.ParallaxLayerThree>
          <Styled.Image
            src={layer_2}
            height="455px"
            width="3000px"
            className="parallax__img"
            alt="mountains"
            onLoad={() => setImagesLoaded([...imagesLoaded, "layer2"])}
            show={true}
            opacityDelayTime={0.8}
          />
        </Styled.ParallaxLayerThree>

        <Styled.ParallaxLayerFour>
          <Styled.Image
            src={layer_3}
            height="455px"
            width="3000px"
            className="parallax__img"
            alt="mountains"
            onLoad={() => setImagesLoaded([...imagesLoaded, "layer3"])}
            show={true}
            opacityDelayTime={0.4}
          />
        </Styled.ParallaxLayerFour>
        <Styled.ParallaxLayerFive ref={scrollRef}>
          <Styled.Image
            src={layer_4}
            height="200px"
            width="3000px"
            className="parallax__img"
            alt="mountains"
            onLoad={() => setImagesLoaded([...imagesLoaded, "layer4"])}
            show={true}
            opacityDelayTime={0}
          />
          <AboutMe show={true} />
          <Skills />
          <PortfolioSection />
          <Contact showHeader />
          <Footer />
        </Styled.ParallaxLayerFive>
      </Parallax>
    </Styled.HomePage>
  );
};

export default HomePage;
