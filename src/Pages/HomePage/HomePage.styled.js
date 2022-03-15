import styled from "styled-components";
import polyBackground from "Images/hero-text-bg-static.svg";
import screenSize from "Styles/mediaQueries";
import {
  fontColours,
  backgroundColours,
  boxShadowColours
} from "Styles/colours";

export const HomePage = styled.div``;

export const ParallaxLayer = styled.div`
  position: absolute;
  top: 450px;
  right: 0;
  bottom: 0;
  left: 0;

  ${screenSize.minTablet`
        top: 650px;
    `}
`;

export const ParallaxLayerOne = styled(ParallaxLayer)`
  transform: translateZ(-300px) scale(4);
  top: 0;
  ${screenSize.minTablet`
        top: 0;
    `}
`;
export const ParallaxLayerTwo = styled(ParallaxLayer)`
  transform: translateZ(-150px) translateY(-50px) scale(2.5);
`;
export const ParallaxLayerThree = styled(ParallaxLayer)`
  transform: translateZ(-100px) translateY(-100px) scale(2);
`;
export const ParallaxLayerFour = styled(ParallaxLayer)`
  transform: translateZ(-50px) translateY(-100px) scale(1);
`;

export const ParallaxLayerFive = styled(ParallaxLayer)``;

export const BackgroundInnerShadow = styled.div`
  height: 850px;
  width: 3000px;
`;

export const Box = styled.div`
  height: 850px;
  max-width: 101vw;
  margin: auto;
  box-shadow: ${boxShadowColours.largeInset};
  position: relative;
  background-color: ${backgroundColours.jaggedIce};
`;

export const HeadingContainer = styled.div`
  padding-top: 160px;
  max-width: 900px;
  margin: auto;
  position: relative;

  opacity: 0;
  transition: opacity 0.6s;
  ${({ show }) =>
    show &&
    `
        opacity: 1;
        transition: opacity 1s 2s;
    `}

  ${screenSize.minTablet`
        padding-top: 250px;
    `}
`;

export const Heading = styled.h1`
  font-size: 60px;
  text-align: center;
  font-weight: 600;
  color: #00c2e6;
  letter-spacing: 3px;
  line-height: 1;
  margin: 0 20px;
  font-family: HelveticaNeueCondensedBold;
  letter-spacing: 0px;
  background-size: 500px;
  background-image: url(${polyBackground});
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-position: center center;

  opacity: 0;
  transition: opacity 1s;
  ${({ onScreen }) =>
    onScreen &&
    `
        opacity: 1;
        transition: opacity 1s;
    `}

  ${screenSize.minTablet`
        font-size: 110px;
        line-height: 90px;
    `}
`;

export const SubHeading = styled.h2`
  font-size: 16px;
  text-align: center;
  font-weight: 700;
  color: ${fontColours.fountainBlue};
  letter-spacing: 4px;
  margin: 0;
  font-family: HelveticaNeueCondensedBold;
  letter-spacing: 5px;

  opacity: 0;
  transition: opacity 1s;
  ${({ onScreen }) =>
    onScreen &&
    `
        opacity: 1;
        transition: opacity 1s;
    `}

  ${screenSize.minTablet`
        font-size: 26px;
    `}
`;

export const CloudOne = styled.img`
  position: absolute;
  top: 220px;

  right: -400px;
  opacity: 0;
  transition: opacity 2s;
  ${({ show, opacityDelayTime }) =>
    show &&
    `
        right: -300px;
        opacity: 1;
        transition: all 2s ${opacityDelayTime}s;
    `}
`;

export const CloudTwo = styled.img`
  position: absolute;
  bottom: 0;

  left: -400px;
  opacity: 0;
  transition: opacity 2s;
  ${({ show, opacityDelayTime }) =>
    show &&
    `
        left: -300px;
        opacity: 1;
        transition: all 2s ${opacityDelayTime}s;
    `}
`;

export const Image = styled.img`
  opacity: 0;
  transition: opacity 2s;
  ${({ show, opacityDelayTime }) =>
    show &&
    `
        opacity: 1;
        transition: opacity 2s ${opacityDelayTime}s;
    `}
`;

export const FadeInAndOutOfPages = styled.div`
  background: ${({ fadeIn }) =>
    fadeIn ? backgroundColours.cloudBurst : backgroundColours.transparent};
  transition: background 1.8s, z-index 0s 1.8s;
  height: 100%;
  width: 100%;
  z-index: ${({ fadeIn }) => (fadeIn ? "1000" : "0")};
  position: absolute;
  margin: auto;
`;
