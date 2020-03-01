import styled from "styled-components";
import screenSize from "Styles/mediaQueries";
import { fontColours, backgroundColours } from "Styles/colours";

export const Contact = styled.div`
  width: 3000px;
  background: ${({ background }) =>
    background ? background : backgroundColours.bluewood};
`;

export const ContactInner = styled.div`
  overflow: hidden;
  max-width: 100vw;
  margin: auto;
  width: 70vw;
  padding: 100px 0;
  transition: padding 1s;

  ${screenSize.minDesktop`
        flex-direction: row;
        padding: ${({ showContactButtons }) =>
          showContactButtons ? "200px 0 300px" : "200px 0"};
    `}
`;

export const Heading = styled.h1`
  text-align: center;
  color: white;
  font-weight: 700;
  font-size: 70px;
  line-height: 1;
  color: ${fontColours.blueHaze};

  opacity: 0;
  transform: translateY(10vh);
  transition: all 0.6s;

  ${({ onScreen }) =>
    onScreen &&
    `
        opacity: 1;
        transform: none;
        transition: opacity 1.5s ease-in, transform 0.6s ease-out;
    `}

  ${screenSize.minDesktop`
        font-size: 100px;
    `}
`;

export const Body = styled.p`
  text-align: center;
  color: ${fontColours.alto};
  line-height: 2em;
  font-size: 18px;
  font-family: Lato, serif;
  color: ${fontColours.nobel};
  margin-top: 30px;

  opacity: 0;
  transform: translateY(10vh);
  transition: all 0.6s;

  ${({ onScreen }) =>
    onScreen &&
    `
        opacity: 1;
        transform: none;
        transition: opacity 1.5s ease-in, transform 0.6s ease-out;
    `}
`;

export const TextPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImagePanel = styled.div`
  padding-top: 20px;
  display: inline-block;
  text-align: center;

  position: relative;
  width: 100%;

  opacity: 0;
  transform: translateX(-30%);
  transition: all 0.6s;
  left: 50%;

  ${({ onScreen }) =>
    onScreen &&
    `
        opacity: 1;
        transform: translateX(0);
        left: 0;
        transition: opacity 1.5s ease-in, transform 0.6s ease-out, left 1s ease-out;
    `}

  ${screenSize.minDesktop`
        padding-top: 60px;
        width: unset;
        text-align: unset;
        transform: ${({ showContactButtons }) =>
          showContactButtons ? "translateX(0)" : "translateX(-50%)"};
        left: ${({ showContactButtons }) => (showContactButtons ? "0" : "50%")};


        ${({ onScreen }) =>
          onScreen &&
          `
            transition: opacity 1.5s ease-in, transform 0.6s ease-out, left 1s ease-out;
        `}
    `}
`;

export const Icon = styled.img`
  height: 40px;
  filter: grayscale(0.4);
  display: inline-block;
  margin: 20px 10px;
  vertical-align: top;
  opacity: 1;
  transform: scale(0.9);

  ${screenSize.minDesktop`
        height: 110px;
        transition: all 1s;
        margin: 20px 40px;
        ${({ onScreen, showContactButtons }) =>
          onScreen &&
          `
        opacity: 1;
        transition: top 1s ease-in-out, left 1s ease-in-out, height 1s ease-in-out, opacity 1.5s ease-in, transform 0.6s ease-out;
        ${showContactButtons &&
          `
            height: 80px;
        `}

        color: blue;
        :hover {
            transition: top 1s ease-in-out, left 1s ease-in-out, height 1s ease-in-out, opacity 1.5s ease-in, transform 0.6s ease-out;
            transform: scale(1);
            cursor: pointer;
            filter: grayscale(0);
        }
    `}
`}
`;

export const IconTwo = styled(Icon)`
  position: relative;

  ${screenSize.minDesktop`
        top: ${({ showContactButtons }) =>
          showContactButtons ? "120px" : "0"};
        left: ${({ showContactButtons }) =>
          showContactButtons ? "-220px" : "0"};
    `}
`;

export const ContactText = styled.h4`
  display: inline-block;
  opacity: 1;
  font-size: 18px;
  width: 100%;
  top: 35px;
  left: 210px;
  color: ${fontColours.pigeonPost};

  ${screenSize.minDesktop`
        position: absolute;
        font-size: 30px;
        width: 520px;
        opacity: ${({ showContactButtons }) =>
          showContactButtons ? "1" : "0"};
        transition: ${({ showContactButtons }) =>
          showContactButtons ? "opacity 0.4s 1s" : "opacity 0.4s"};
        z-index: ${({ showContactButtons }) =>
          showContactButtons ? "1" : "0"};
    `}
`;

export const ContactTextTwo = styled(ContactText)`
  top: 153px;
  left: 0;
`;

export const IconAndText = styled.div`
  position: relative;
  display: flex;
  display: inline-block;
  width: 100%;

  ${screenSize.minDesktop`
        width: unset;
    `}
`;
