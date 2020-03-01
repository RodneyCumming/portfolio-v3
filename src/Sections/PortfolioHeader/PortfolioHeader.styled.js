import styled from "styled-components";
import polyBackground from "Images2//text-bg.svg";
import buttonBackground from "Images2//button-bg.svg";
import screenSize from "Styles2/mediaQueries";
import { fontColours, backgroundColours } from "Styles2/colours";

export const PortfolioHeader = styled.div`
  width: 3000px;
  background-color: ${backgroundColours.mirage};

  ${screenSize.minDesktop`
      min-height: 100vh;
    `}
`;

export const PortfolioHeaderInner = styled.div`
  overflow: auto;
  max-width: 100vw;

  max-height: 1000px;
  margin: auto;
  padding: 0;
  box-sizing: border-box;
  display: flex;

  ${screenSize.minDesktop`
        padding: 100px 0;
        height: 100vh;
    `}
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 150px auto 100px;
  text-align: center;
`;

export const Heading = styled.h1`
  text-align: center;
  color: white;
  font-weight: 900;
  margin: 0 20px 20px;
  font-size: 90px;
  line-height: 1;
  letter-spacing: 3px;
  background-image: url(${polyBackground});
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-size: cover;
  background-position: center center;

  opacity: 0;
  transform: translateY(10vh);
  transition: opacity 0.6s, transform 0.6s 0.5s;

  filter: blur(20px);

  ${({ onScreen }) =>
    onScreen &&
    `
        opacity: 1;
        transform: none;
        transition: opacity 1.7s ease-in, transform 0.6s ease-out, filter 1s;
        filter: none;
    `}

  ${screenSize.minTablet`
      font-size: 150px;
    `}
`;

export const Body = styled.p`
  text-align: center;
  color: ${fontColours.nobel};
  line-height: 1.6em;
  font-size: 22px;
  font-family: Lato, serif;
  margin-left: 20px;
  margin-right: 20px;
  opacity: 0;
  transform: translateY(10vh);
  transition: opacity 0.6s, transform 0.6s 0.5s;

  ${({ onScreen }) =>
    onScreen &&
    `
        opacity: 1;
        transform: none;
        transition: opacity 1.5s ease-in, transform 0.8s ease-out;
    `}
`;

export const Button = styled.a`
  border: none;
  background: ${backgroundColours.calypso};
  color: #fff;
  font-family: Lato, serif;
  padding: 15px 100px;
  border-radius: 10px;
  margin-top: 40px;
  transition: background 0.3s;
  font-size: 18px;
  display: inline-block;
  text-decoration: none;

  :hover {
    cursor: pointer;
    background: ${backgroundColours.curiousBlue};
    transition: background 0.3s;
    background-image: url(${buttonBackground});
  }

  opacity: 0;
  transform: translateY(10vh);
  transition: opacity 0.6s, transform 0.6s 0.5s;

  ${({ onScreen }) =>
    onScreen &&
    `
      opacity: 1;
      transform: none;
      transition: opacity 1.3s ease-in, transform 1s ease-out;
  `}
`;
