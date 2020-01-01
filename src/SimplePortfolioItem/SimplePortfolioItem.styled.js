import styled, {keyframes} from 'styled-components';

export const SimplePortfolioItem = styled.div`
    width: 3000px;
    background: #2f324e;
    scroll-snap-align: start;
`; 

export const SimplePortfolioItemInner = styled.div`
    overflow: auto;
    max-width: 100vw;
    margin: auto;
    display: flex;
    scroll-snap-align: start;
`;

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    max-width: 3000px;
    max-height: 1000px;
    margin: auto;
    background: #40415E;
    position: relative;
    box-shadow: inset 0 0 50px 50px #36374e;
    scroll-snap-align: start;
`;


const hoverImage = keyframes`
  0% {
    top: -10px;
  }

  50% {
    top: 10px;
  }

  100% {
    top: -10px;
  }
`;

export const Image = styled.img`
    width: 100%;
`;

export const ImageAndOverlay = styled.div`
    position: relative;
    top: -20px;
    animation: ${hoverImage} 3s ease-in-out infinite;
    animation-timing-function: cubic-bezier(.6,.4,.4,.6);
`;

export const ImageContainer = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50vw;
    max-width: 600px;

    transform: translate(-50%, -50%) scale(0.3, 0.3);
    transition: all 0s;

    ${props => props.onScreen && `
        opacity: 1;
        transform: translate(-50%, -50%) scale(1, 1);
        transition: transform 2s ease-out;
    `}
`;

const shadowSize = keyframes`
  0% {
    height: 40px;
    width: 90%;
    left: 5%;
  }

  50% {
    height: 50px;
    width: 100%;
    left: 0;
  }

  100% {
    height: 40px;
    width: 90%;
    left: 5%;
  }
`;

export const Shadow = styled.div`
    position: absolute;
    bottom: -90px;
    height: 50px;
    width: 100%;
    left: 0;
    background: #333550;
    border-radius: 50%;
    box-shadow: inset 0 0 10px 10px #40415e;
    animation: ${shadowSize} 3s ease-in-out infinite;
    animation-timing-function: cubic-bezier(.6,.4,.4,.6);
`;

export const ImageOverlay = styled.div`
    height: 100%;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    background: #40415E;
    opacity: 0.5;

`;

export const Title = styled.h1`
    width: 100vw;
    max-width: 3000px;
    margin: auto;
    position: absolute;
    color: white;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    font-size: 110px;
    font-family: HelveticaNeueCondensedBold;
    letter-spacing: 5px;

    opacity: 0;
    transition: all 0s;

    ${props => props.onScreen && `
        opacity: 1;
        transition: opacity 2s ease-in;
    `}
`;

export const Number = styled.h1`
    top: 40px;
    left: 50px;
    margin: 0;
    color: #C95F62;
    position: absolute;
    font-size: 110px;
    font-family: HelveticaNeueCondensedBold;
    letter-spacing: 5px;

    opacity: 0;
    left: 0;
    transition: all 0s;

    ${props => props.onScreen && `
        opacity: 1;
        left: 50px;
        transition: opacity 1.5s ease-in, left 0.6s ease-out;
    `}
`;

