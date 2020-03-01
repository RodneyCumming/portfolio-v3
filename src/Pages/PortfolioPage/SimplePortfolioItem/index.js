import React, { useRef } from "react";
import * as Styled from "./SimplePortfolioItem.styled.js";
import useOnScreen from "Hooks2/useOnScreen";

const SimplePortfolioItem = props => {
  const {
    name,
    image,
    textColor,
    bgColor,
    boxShadowColor,
    shadowColor,
    overlayColor,
    link,
    githubLink,
    note
  } = props.data;
  const { index } = props;
  console.log(bgColor);
  console.log(index);
  const ref = useRef();
  const onScreen = useOnScreen(ref, "-100px");
  return (
    <Styled.SimplePortfolioItem>
      <Styled.SimplePortfolioItemInner>
        <Styled.Container
          ref={ref}
          bgColor={bgColor}
          boxShadowColor={boxShadowColor}
        >
          <Styled.Number onScreen={onScreen} textColor={textColor}>{`0${index +
            1}.`}</Styled.Number>
          <Styled.ImageContainer
            as={link ? "a" : "div"}
            href={link}
            target={"_blank"}
          >
            {name}>
            <Styled.ImageAndOverlay>
              <Styled.Image src={image} alt="Portfolio Item Screen Shot" />
              <Styled.ImageOverlay
                bgColor={overlayColor ? overlayColor : bgColor}
              />
            </Styled.ImageAndOverlay>
            <Styled.Shadow bgColor={bgColor} shadowColor={shadowColor} />
          </Styled.ImageContainer>
          <Styled.Title
            onScreen={onScreen}
            as={link ? "a" : "h1"}
            href={link}
            target={"_blank"}
          >
            {name}
          </Styled.Title>
          <Styled.Note>{note}</Styled.Note>
          {githubLink && (
            <Styled.GithubLink href={githubLink} target={"_blank"}>
              <Styled.GithubLogo fill={bgColor} />
            </Styled.GithubLink>
          )}
        </Styled.Container>
      </Styled.SimplePortfolioItemInner>
    </Styled.SimplePortfolioItem>
  );
};

export default SimplePortfolioItem;
