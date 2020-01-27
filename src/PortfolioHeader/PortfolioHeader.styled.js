import styled, {keyframes} from 'styled-components';
// import polyBackground from '../images/trianglify-lowres.png'
import polyBackground from '../images/text-bg.svg';
import buttonBackground from '../images/button-bg.svg';

export const PortfolioHeader = styled.div`
    width: 3000px;
    min-height: 100vh;
    background-color: #1a2835;
`; 

export const PortfolioHeaderInner = styled.div`
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

const hoveringPlane = keyframes`
  0% {
    // background: #7778a5;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-position: left top;

  }
  50% {
    // background: #8279ce;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-position: right bottom;
    
  }
  100% {
    // background: #7778a5;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-position: left top;
    
    
  }
`;


export const Heading = styled.h1`
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


    opacity: 0;
    transform: translateY(10vh);
    transition: opacity 0.6s, transform 0.6s 0.5s;

    filter: blur(20px);


    ${props => props.onScreen && `
        opacity: 1;
        transform: none;
        transition: opacity 1.7s ease-in, transform 0.6s ease-out, filter 1s;
        filter: none;
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
    transition: opacity 0.6s, transform 0.6s 0.5s;

    ${props => props.onScreen && `
        opacity: 1;
        transform: none;
        transition: opacity 1.5s ease-in, transform 0.8s ease-out;
    `}
`;

export const Button = styled.a`
  border: none;
  background: #2c5f88;
  color: #fff;
  font-family: Lato,serif;
  padding: 15px 100px;
  border-radius: 10px;
  margin-top: 40px;
  transition: background .3s;
  font-size: 18px;
  display: inline-block;
  text-decoration: none;

  :hover {
    cursor: pointer;
    background: #3495d9;
    transition: background .3s;
    background-image: url(${buttonBackground});
    
  }

  opacity: 0;
  transform: translateY(10vh);
  transition: opacity 0.6s, transform 0.6s 0.5s;

  ${props => props.onScreen && `
      opacity: 1;
      transform: none;
      transition: opacity 1.3s ease-in, transform 1s ease-out;
  `}
`;
