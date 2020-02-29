import styled from "styled-components";
import screenSize from "Styles/mediaQueries";

export const Skills = styled.div`
  width: 3000px;
  background: #2c344e;
`;

export const SkillsInner = styled.div`
  overflow: hidden;
  max-width: 100vw;
  margin: auto;
  width: 70vw;
  padding: 100px 0;

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
  color: #bbc3da;

  opacity: 0;
  transform: translateY(10vh);
  transition: all 0.6s;

  ${props =>
    props.onScreen &&
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
  color: #d3d3d3;
  line-height: 2em;
  font-size: 18px;
  font-family: Lato, serif;
  color: #b5b5b5;
  margin-top: 30px;
  margin-bottom: 40px;

  opacity: 0;
  transform: translateY(10vh);
  transition: all 0.6s;

  ${props =>
    props.onScreen &&
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;

  opacity: 0;
  transform: translateX(10vh);
  transition: all 0.6s;

  ${props =>
    props.onScreen &&
    `
        opacity: 1;
        transform: none;
        transition: opacity 1.5s ease-in, transform 0.6s ease-out;
    `}

  ${screenSize.minTablet`
        padding: 20px;
    `}
`;

export const Icon = styled.img`
  height: 30px;
  filter: saturate(0) brightness(1.5);

  ${screenSize.minTablet`
        height: 40px;
    `}
`;

export const IconLabel = styled.p`
  color: white;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
  * + * {
    margin-left: 20px;
  }
`;

export const CategoryButton = styled.button`
  background: none;
  padding: 8px 20px;
  border: 1px solid #828cad;
  border-radius: 20px;
  color: ${props => (props.selected ? "#bbc8f3" : "#828cad")};
  transition: border 0.2s;
  margin-bottom: 15px;
  :focus {
    outline: 0;
  }

  :hover {
    cursor: pointer;
    border: 1px solid #bbc8f3;
    transition: border 0.2s;
  }

  opacity: 0;
  transform: translateX(-10vh);
  transition: all 0.6s;

  ${props =>
    props.onScreen &&
    `
        opacity: 1;
        transform: none;
        transition: opacity 1.5s ease-in, transform 0.6s ease-out;
    `}

  ${screenSize.minTablet`
        margin-bottom: 0px;
    `}
`;
