import styled from 'styled-components'
import polyBackground from '../images/hero-text-bg-static.svg';

export const Hero = styled.section`
`;

export const ParallaxLayer = styled.div`
    position: absolute;
    top: 650px;
    right: 0;
    bottom: 0;
    left: 0;
`;

export const ParallaxLayerOne = styled(ParallaxLayer)`
    transform: translateZ(-300px) scale(4);
    top: 0;
`;
export const ParallaxLayerTwo = styled(ParallaxLayer)`
    transform: translateZ(-150px) translateY(-50px) scale(2.5);
`;
export const ParallaxLayerThree = styled(ParallaxLayer)`
    transform: translateZ(-100px) translateY(-100px) scale(2);
`;
export const ParallaxLayerFour = styled(ParallaxLayer)`
    transform: translateZ(-50px) translateY(-100px) scale(1);
`;

export const ParallaxLayerFive = styled(ParallaxLayer)`
    // margin-top: 100px;
    // transform: translateZ(-50px) scale(1.5);
`;


export const BackgroundInnerShadow = styled.div`
    // height: 700px;
    height: 850px;
    width: 3000px;
`;

export const  Box = styled.div`
    height: 850px;
    max-width: 101vw;
    margin: auto;
    box-shadow: inset 0 0 400px -150px;
    position: relative;
    background-color: #cbe0ec;
    // background: linear-gradient(to bottom, #7dacc3, #cbebff);
    // background-image: url("https://www.transparenttextures.com/patterns/brushed-alum-dark.png");


    // ${props => props.onLoad && `
    //     background-color: #cbe0ec;
    //     transition: 0.6s;
    // `}
`;

export const HeadingContainer = styled.div`
    padding-top: 250px;
    width: 900px;
    margin: auto;
    position: relative;

    opacity: 0;
    transition: opacity 0.6s;
    ${props => props.show && `
        opacity: 1;
        transition: opacity 1s 2s;
    `}
`;

export const Heading = styled.h1`
    // font-size: 62px;
    font-size: 110px;
    text-align: center;
    font-weight: 600;
    color: #00C2E6;
    letter-spacing: 3px;
    line-height: 90px;
    margin: 0;
    font-family: HelveticaNeueCondensedBold;
    letter-spacing: 0px;
    

    // background-image: url("https://www.transparenttextures.com/patterns/buried.png");
    // background-color: #00C2E6;
    // background-image: linear-gradient(to top left,#00C2E6 5%,#00C2E6);
    background-size: 500px;
    // -webkit-text-fill-color: transparent;
    // -webkit-background-clip: text;
    // background-size: cover;
    background-image: url(${polyBackground});
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    // background-size: cover;
    background-position: center center;

    opacity: 0;
    transition: opacity 1s;
    ${props => props.onScreen && `
        opacity: 1;
        transition: opacity 1s;
    `}
`;

export const SubHeading = styled.h2`
    font-size: 26px;
    text-align: center;
    font-weight: 700;
    color: #67A6BE;
    letter-spacing: 4px;
    margin: 0;
    font-family: HelveticaNeueCondensedBold;
    letter-spacing: 5px;

    opacity: 0;
    transition: opacity 1s;
    ${props => props.onScreen && `
        opacity: 1;
        transition: opacity 1s;
    `}
`;

export const CloudOne = styled.img`
    position: absolute;
    top: 220px;
    
    // opacity: 0.5;

    // :hover {
    //     opacity: 1;
    // }

    right: -400px;
    opacity: 0;
    transition: opacity 2s;
    ${props => props.show && `
        right: -300px;
        opacity: 1;
        transition: all 2s ${props.opacityDelayTime}s;
    `}
`;

export const CloudTwo = styled.img`
    position: absolute;
    bottom: 0;
    
    // opacity: 0.5;

    // :hover {
    //     opacity: 1;
    // }

    left: -400px;
    opacity: 0;
    transition: opacity 2s;
    ${props => props.show && `
        left: -300px;
        opacity: 1;
        transition: all 2s ${props.opacityDelayTime}s;
    `}
`;

export const Image = styled.img`
    opacity: 0;
    transition: opacity 2s;
    ${props => props.show && `
        opacity: 1;
        transition: opacity 2s ${props.opacityDelayTime}s;
    `}
`;

export const FadeInAndOutOfPages = styled.div`
    background: ${({fadeIn}) => fadeIn ? '#203244' : 'rgba(0, 0, 0, 0)'};
    transition: background 1.8s, z-index 0s 1.8s;
    height: 100%;
    width: 100%;
    z-index: ${({fadeIn}) => fadeIn ? '1000' : '0'};;
    position: absolute;
    margin: auto;
`;