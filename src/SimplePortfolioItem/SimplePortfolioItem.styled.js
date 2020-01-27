import styled, {keyframes} from 'styled-components';

const hoverImage = keyframes`
  0% {
    top: -20px;
  }

  50% {
    top: 0px;
  }

  100% {
    top: -20px;
  }

`;

const shadowSize = keyframes`
  0% {
    height: 45px;
    width: 100%;
    left: 0;
  }

  50% {
    height: 55px;
    width: 100%;
    left: 0%;
  }

  100% {
    height: 45px;
    width: 100%;
    left: 0;
  }
`;

export const ImageContainer = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    // width: 50vw;
    max-width: 600px;

    transform: translate(-50%, -50%) scale(0.4, 0.4);    
    transition: all 0s;

    // ${props => props.onScreen && `
    //     opacity: 1;
    //     transform: translate(-50%, -50%) scale(1, 1);
    //     transition: transform 2s ease-out;
    // `}
`;

export const ImageAndOverlay = styled.div`
    position: relative;
    top: -20px;
    animation: ${hoverImage} 3s ease-in-out infinite;
    animation-timing-function: cubic-bezier(.6,.4,.4,.6);
    animation-play-state:paused;
`;

export const Shadow = styled.div`
    position: absolute;
    bottom: -90px;
    height: 45px;
    width: 100%;
    left: 0;
    background: ${({shadowColor}) => shadowColor ? shadowColor : ''};
    border-radius: 50%;
    box-shadow: inset 0 0 10px 10px ${props => props.bgColor ? props.bgColor : ''};
    animation: ${shadowSize} 3s ease-in-out infinite;
    animation-timing-function: cubic-bezier(.6,.4,.4,.6);
    animation-play-state:paused;

`;

export const SimplePortfolioItem = styled.div`
       
    ${ImageContainer} {
      transition: transform 0.5s;
    }

    // background: #2f324e;
    :hover ${ImageContainer} {
      transform: translate(-50%, -50%) scale(0.41, 0.41);   
      transition: transform 0.3s;

    }

    :hover ${Shadow} {
      ${'' /* animation-play-state:running; */}
    }



    
`; 

export const SimplePortfolioItemInner = styled.div`
    overflow: auto;
    // max-width: 100vw;
    margin: auto;
    display: flex;
    height: 100%;
    // scroll-snap-align: start;
`;

export const Container = styled.div`
    // height: 100vh;
    // width: 100vw;
    width: 100%;
    max-width: 3000px;
    max-height: 3000px;
    // margin: auto;
    background: ${({bgColor}) => bgColor};
    position: relative;
    box-shadow: inset 0 0 50px 50px ${({boxShadowColor}) => boxShadowColor};;
    // scroll-snap-align: start;
    transition: filter 0.4s;
    filter: brightness(95%);

    :hover {
      transition: filter 0.4s;
      filter: brightness(110%);
    }
`;




export const Image = styled.img`
    width: 100%;
`;









export const ImageOverlay = styled.div`
    height: 100%;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    background: ${props => props.bgColor ? props.bgColor : 'blue'};
    opacity: 0.5;

`;


export const Title = styled.h1`
    width: 45vw;
    max-width: 3000px;
    margin: auto;
    position: absolute;
    color: white;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 45px;
    line-height: 1;
    font-family: HelveticaNeueCondensedBold;
    // letter-spacing: 5px;
    // width: 90vw;

    ${'' /* opacity: 0;
    transition: all 0s; */}

    ${'' /* ${props => props.onScreen && `
        opacity: 1;
        transition: opacity 2s ease-in;
    `} */}
`;

export const Number = styled.h1`
    top: 5%;
    margin: 0;
    color: ${({textColor}) => textColor};
    position: absolute;
    font-size: 45px;
    font-family: HelveticaNeueCondensedBold;
    letter-spacing: 5px;
    line-height: 1;
    opacity: 1;
    left: 5%;
    transition: all 0s;

    ${'' /* ${props => props.onScreen && `
        opacity: 1;
        left: 5%;
        transition: opacity 1.5s ease-in, left 0.6s ease-out;
    `} */}
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin: auto;
  position: absolute;
  color: white;
  bottom: 20px;
  right: 30px;
  * + * {
	  margin-left: 10px;
  }
`;

export const Button = styled.button`
  color: rgba(255, 255, 255, 0.1);
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  font-size: 20px;
  line-height: 1;
  font-family: HelveticaNeueCondensedBold;
  padding: 7px 25px;
  border-radius: 8px;
  background: none;
  border: 2px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s;

  :hover {
    background: ${({bgColor}) => bgColor};
    filter: ${({secondButton}) => secondButton ? 'brightness(160%) hue-rotate(0deg)' : 'brightness(160%) hue-rotate(-15deg)'};
    transition: all 0.3s;
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
  }
`;