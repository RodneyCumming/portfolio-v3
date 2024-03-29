import React, { useRef } from "react";
import * as Styled from "./PortfolioSection.styled.js";
import PortfolioImage from "Images/portfolioImage.png";
import useOnScreen from "Hooks/useOnScreen";

const PortfolioSection = () => {
  const ref = useRef();
  const onScreen = useOnScreen(ref, "-100px");

  return (
    <Styled.PortfolioSection>
      <Styled.PortfolioInner ref={ref}>
        <Styled.ImagePanel>
          <Styled.Icon
            src={PortfolioImage}
            alt="coffee icon"
            onScreen={onScreen}
          />
        </Styled.ImagePanel>
        <Styled.TextPanel>
          <Styled.Heading onScreen={onScreen}>PORTFOLIO</Styled.Heading>
          <Styled.Body onScreen={onScreen}>
            Check out my portfolio to see some of projects I have build.
          </Styled.Body>
          <Styled.Button onScreen={onScreen} href="/#/portfolio">
            PORTFOLIO
          </Styled.Button>
        </Styled.TextPanel>
      </Styled.PortfolioInner>
    </Styled.PortfolioSection>
  );
};

export default PortfolioSection;
