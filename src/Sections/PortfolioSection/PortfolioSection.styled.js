import styled from "styled-components";
import screenSize from "Styles/mediaQueries";
import {
  fontColours,
  backgroundColours,
  boxShadowColours
} from "Styles/colours";

export const PortfolioSection = styled.div`
  width: 3000px;
  background: ${backgroundColours.ebonyClay};
`;

export const PortfolioInner = styled.div`
  overflow: auto;
  max-width: 100vw;
  margin: auto;
  width: 70vw;
  padding: 100px 0;
  display: flex;
  flex-direction: column-reverse;

  ${screenSize.minDesktop`
        flex-direction: row;
        padding: 200px 0;
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
        text-align: left;
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

  ${screenSize.minDesktop`
        text-align: left;
    `}
`;

export const TextPanel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0;

  ${screenSize.minDesktop`
        width: 65%;
        margin-left: 5vw;
    `}
`;

export const ImagePanel = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0;
  margin-top: 4rem;

  ${screenSize.minDesktop`
        width: 35%;
        margin-right: 5vw;
        margin-top: unset;
    `}
`;

export const Button = styled.a`
  background: ${backgroundColours.eastBay};
  padding: 16px 50px;
  margin: 40px auto 0;
  font-size: 20px;
  width: fit-content;
  text-decoration: none;
  color: #fff;
  font-family: Lato, serif;
  border-radius: 10px;
  font-size: 18px;
  transition: background 0.2s;

  :hover {
    cursor: pointer;
    background: ${backgroundColours.kashmirBlue};
  }

  opacity: 0;
  transform: translateX(-10vh);
  transition: all 0.6s;

  ${({ onScreen }) =>
    onScreen &&
    `
        opacity: 1;
        transform: none;
        transition: opacity 1.5s ease-in, transform 0.6s ease-out, background 0.2s;
    `}

  ${screenSize.minDesktop`
        margin: 40px 0 0;
    `}
`;

export const Icon = styled.img`
  max-width: 200px;
  width: 70%;

  :after {
    content: "";
    position: absolute;
    bottom: -90px;
    height: 50px;
    width: 100%;
    left: 0;
    background: ${backgroundColours.martinique};
    border-radius: 50%;
    box-shadow: ${boxShadowColours.purpleInset};
  }

  opacity: 0;
  transform: translateX(-10vh);
  transition: all 0.6s;

  ${({ onScreen }) =>
    onScreen &&
    `
        opacity: 1;
        transform: none;
        transition: opacity 1.5s ease-in, transform 0.6s ease-out;
    `}
`;
