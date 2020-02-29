import styled, {keyframes} from 'styled-components';
import GithubIcon from 'Images/githubLogo';
import screenSize from 'Styles/mediaQueries';

export const GithubLogo = styled(GithubIcon)`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 5%;
  top: 5%;
  
  filter: brightness(1.7);
  transition: opacity 0.5s;

  :hover {
    cursor: pointer;
  }

  ${screenSize.minTablet`
    opacity: 0;
    width: 50px;
    height: 50px;
  `}
`;

export const Note = styled.p`
  position: absolute;
  bottom: 5%;
  left: 5%;
  color: white;
  opacity: 0;
  transition: 0.4s;
`;

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


    display: inline-block;
    :hover {
      cursor: pointer;
    }
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
    display: none;

    ${screenSize.minTablet`
      display: block;
    `}

`;

export const SimplePortfolioItem = styled.div`

    ${ImageContainer} {
      transition: transform 0.5s;
    }

    :hover ${ImageContainer} {
      transform: translate(-50%, -50%) scale(0.41, 0.41);   
      transition: transform 0.3s;

    }

    :hover ${GithubLogo} {
      opacity: 1;
      transition: filter 0.2s, opacity 3s;
    }

    :hover ${GithubLogo} {
      :hover {
        filter: brightness(2.5);
      }
    }

    :hover ${Note} {
      opacity: 0.5;
    }



    
`; 

export const SimplePortfolioItemInner = styled.div`
    overflow: auto;
    margin: auto;
    display: flex;
    height: 100%;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 3000px;
    max-height: 3000px;
    background: ${({bgColor}) => bgColor};
    position: relative;
    box-shadow: inset 0 0 50px 50px ${({boxShadowColor}) => boxShadowColor};;
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
    display: inline-block;
    width: fit-content;
    margin: auto;
    position: absolute;
    color: white;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    line-height: 1;
    font-family: HelveticaNeueCondensedBold;
    text-decoration: none;

    :hover {
      cursor: pointer;
    }

    ${screenSize.minTablet`
      font-size: 45px;
    `}
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

  ${screenSize.minTablet`
    font-size: 35px;
  `}
    
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

export const GithubLink = styled.a`
  
`;
