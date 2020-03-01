import styled from "styled-components";
import screenSize from "Styles/mediaQueries";
import { fontColours, backgroundColours } from "Styles/colours";

export const Footer = styled.div`
  width: 3000px;
  background: ${backgroundColours.darkMirage};
`;

export const FooterInner = styled.div`
  overflow: auto;
  max-width: 100vw;
  margin: auto;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-contern: center;

  opacity: 0;
  transform: translateX(10vh);
  transition: all 0s;
  flex-direction: column;

  ${screenSize.minTablet`
        flex-direction: row;
        padding: 100px;
    `}

  ${({ onScreen }) =>
    onScreen &&
    `
        opacity: 1;
        transform: none;
        transition: opacity 1.5s ease-in, transform 0.6s ease-out;
    `}
`;

export const Body = styled.p`
  text-align: center;
  color: ${fontColours.alto};
  line-height: 2rem;
  font-size: 16px;
  font-family: Lato, serif;
  align-self: center;

  ${screenSize.minTablet`
        line-height: 3rem;
    `}
`;

export const Logo = styled.img`
  margin: 0;
  margin-bottom: 15px;

  ${screenSize.minTablet`
        margin: 30px;
    `}
`;
export const Link = styled.a`
  text-align: center;
`;
