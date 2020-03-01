import styled, { keyframes } from "styled-components";
import screenSize from "Styles/mediaQueries";
import { backgroundColours, boxShadowColours } from "Styles/colours";

export const ContactForm = styled.div`
  width: 3000px;
  background: #203344;
`;

export const ContactFormInner = styled.div`
  max-width: 100vw;
  margin: auto;
  padding: 20px;
  position: relative;
  display: flex;

  ${screenSize.minLargeMobile`
        padding: 40px;
    `}

  ${screenSize.minDesktop`
        padding: 100px;
    `}
`;

export const ContactFormContainer = styled.form`
  width: 70vw;
  max-width: 1400px;
  margin: auto;
  position: relative;
  display: flex;
  border-radius: 35px 35px 0 0;
  transition: all 0.2s;
  width: 100%;
  flex-direction: column;
  transition: all 0.2s;

  ${({ activeMound }) =>
    activeMound &&
    `
        left: -2px;
        top: -2px;
        transition: all 0.2s;
    `}

  ${screenSize.minDesktop`
        flex-direction: row;
        border-radius: 35px 0 0 35px;
    `}
`;

export const FormHeader = styled.h3`
  margin: 0 0 30px;
  text-align: left;
  font-size: 30px;
  color: #fff;
  font-family: Raleway, sans-serif;
  font-weight: 800;
`;

export const TextInput = styled.input`
  display: inline-block;
  background: ${backgroundColours.purpleWood};
  outline: none;
  border: 1px solid ${backgroundColours.purpleWood};
  font-weight: 400;
  border-radius: 5px;
  font-family: Lato, serif;
  font-size: 18px;
  color: #fff;
  width: 100%;
  margin-bottom: 30px;
  line-height: 40px;
  padding: 10px 15px;
  box-sizing: border-box;
  margin-right: ${({ rightMargin }) => (rightMargin ? "100px" : "")};

  :hover {
    background: ${backgroundColours.rhino};
  }

  :focus {
    background: ${backgroundColours.sanJuan};
  }

  ${screenSize.minDesktop`
        width: calc(50% - 50px);
    `}
`;

export const TextAreaInput = styled.textarea`
  display: inline-block;
  background: ${backgroundColours.purpleWood};
  outline: none;
  font-size: 18px;
  border: 1px solid ${backgroundColours.purpleWood};
  font-weight: 400;
  border-radius: 5px;
  font-family: Lato, serif;
  color: #fff;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 30px;
  line-height: 25px;
  padding: 10px 15px;
  resize: none;

  :hover {
    background: ${backgroundColours.rhino};
  }

  :focus {
    background: ${backgroundColours.sanJuan};
  }
`;

export const SendIcon = styled.img`
  width: 60px;
  height: 40px;
`;

const hoveringPlane = keyframes`
  0% {
    height: 40px;
    width: 60px;
  }
  50% {

    height: 80px;
    width: 60px;
  }
  100% {
    height: 40px;
    width: 60px;
  }
`;

export const SendButton = styled.button`
  border: none;
  background: ${backgroundColours.darkCello};
  color: #fff;
  font-size: 18px;
  font-family: Lato, serif;
  padding: 10px 50px;
  margin: 0;
  width: 100%;
  height: 80px;
  transition: background 0.3s;
  border-radius: 0 0 35px 35px;
  box-shadow: ${boxShadowColours.blueMound};

  :hover {
    cursor: pointer;
    transition: background 0.3s;
    background: ${backgroundColours.cello};
  }
  :hover ${SendIcon} {
    ${screenSize.minDesktop`
            animation: ${hoveringPlane} 1s ease-in-out infinite;
        `}
  }

  ${screenSize.minDesktop`
        width: 30%;
        max-width: 200px;
        height: unset;
        border-radius: 0 35px 35px 0;
    `}
`;

export const FormMiddlePanel = styled.div`
  padding: 40px 20px 10px;
  flex-grow: 1;
  border-radius: 35px 35px 0 0;

  box-shadow: ${boxShadowColours.blueMound};

  ${screenSize.minLargeMobile`
        padding: 60px 60px 40px;
    `}

  ${screenSize.minDesktop`
        border-radius: 35px 0 0 35px;
        padding: 70px 110px;
    `}
`;
