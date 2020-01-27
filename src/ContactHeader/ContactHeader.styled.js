import styled from 'styled-components';
import polyBackground from '../images/text-bg.svg';
import buttonBackground from '../images/button-bg.svg';

export const ContactHeader = styled.div`
    width: 3000px;
    height: 100vh;
    background: #1a2835;
`; 

export const ContactHeaderInner = styled.div`
    overflow: auto;
    max-width: 100vw;
    height: 100vh;
    max-height: 1000px;
    margin: auto;
    padding: 100px;
    box-sizing: border-box;
    display: flex;
`;

export const Container = styled.div`
    max-width: 1200px;
    margin: auto;
    text-align: center;
`;


export const Heading = styled.h1`
    // text-align: center;
    // color: white;
    // font-weight: 700;
    // margin-bottom: 35px;
    // margin-top: 0px;
    // font-size: 100px;
    // letter-spacing: 3px;
    // background: linear-gradient(to right,#28d091,#9b7dd5);
    // -webkit-text-fill-color: transparent;
    // -webkit-background-clip: text;
    // background-size: cover;

    text-align: center;
    color: white;
    font-weight: 900;
    margin-bottom: 20px;
    margin-top: 0px;
    font-size: 150px;
    line-height: 1;
    letter-spacing: 3px;
    background-image: url(${polyBackground});
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-size: cover;
    background-position: center center;
    
    // filter: hue-rotate(388deg) brightness(1.4);
    // filter: brightness(1.4) hue-rotate(4deg);

    opacity: 0;
    transform: translateY(10vh);
    transition: all 0.6s;

    filter: blur(20px) hue-rotate(333deg);

    ${props => props.onScreen && `
        opacity: 1;
        transform: none;
        transition: opacity 1.7s ease-in, transform 0.6s ease-out, filter 1s;
        filter: blur(0px) hue-rotate(333deg);
    `}
`;




export const Body = styled.p`
    text-align: center;
    color: #d3d3d3;
    line-height: 1.6em;
    font-size: 22px;
    font-family: Lato,serif;

    opacity: 0;
    transform: translateY(10vh);
    transition: all 0.6s;

    ${props => props.onScreen && `
        opacity: 1;
        transform: none;
        transition: opacity 1.5s ease-in, transform 0.8s ease-out;
    `}
`;

export const Button = styled.button`
  border: none;
  background: #2c5f88;
  color: #fff;
  font-family: Lato,serif;
  padding: 15px 100px;
  border-radius: 10px;
  margin-top: 40px;
  transition: background .3s;
  font-size: 18px;
  filter: hue-rotate(333deg);

  :hover {
    cursor: pointer;
    transition: background .3s;
    background-image: url(${buttonBackground});
    
  }

  opacity: 0;
    transform: translateY(10vh);
    transition: transform 0.6s, opacity 0.6s;

    ${props => props.onScreen && `
        opacity: 1;
        transform: none;
        transition: opacity 1.3s ease-in, transform 1s ease-out;
    `}
`;

