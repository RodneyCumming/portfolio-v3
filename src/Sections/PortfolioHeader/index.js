import React, { useRef } from "react";
import * as Styled from "./PortfolioHeader.styled.js";
import useOnScreen from "Hooks/useOnScreen";

const PortfolioHeader = () => {
  const ref = useRef();
  const onScreen = useOnScreen(ref, "-100px");

  return (
    <Styled.PortfolioHeader>
      <Styled.PortfolioHeaderInner>
        <Styled.Container ref={ref}>
          <Styled.Heading onScreen={onScreen}>PORTFOLIO</Styled.Heading>
          <Styled.Body onScreen={onScreen}>
            Here are some personal projects I have created over the years.
          </Styled.Body>
          <Styled.Button
            onScreen={onScreen}
            href="https://github.com/RodneyCumming"
            target="_blank"
          >
            GITHUB
          </Styled.Button>
        </Styled.Container>
      </Styled.PortfolioHeaderInner>
    </Styled.PortfolioHeader>
  );
};

export default PortfolioHeader;
