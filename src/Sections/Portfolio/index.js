import React, { useRef } from "react";
import * as Styled from "./Portfolio.styled.js";
import PortfolioImage from "Images/portfolioImage.png";
import useOnScreen from "Hooks/useOnScreen";

const Portfolio = () => {
  const ref = useRef();
  const onScreen = useOnScreen(ref, "-100px");

  return (
    <Styled.Portfolio>
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
            Check out my portfolio to see some of projects I have build to
            showcase my abilities using core web development technologies.
          </Styled.Body>
          <Styled.Button onScreen={onScreen} href="/#/portfolio">
            PORTFOLIO
          </Styled.Button>
        </Styled.TextPanel>
      </Styled.PortfolioInner>
    </Styled.Portfolio>
  );
};

export default Portfolio;
