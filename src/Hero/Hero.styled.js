import styled from 'styled-components'

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
    transform: translateZ(-250px) scale(3.5);
`;
export const ParallaxLayerThree = styled(ParallaxLayer)`
    transform: translateZ(-200px) scale(3);
`;
export const ParallaxLayerFour = styled(ParallaxLayer)`
    transform: translateZ(-150px) scale(2.5);
`;

export const ParallaxLayerFive = styled(ParallaxLayer)`
    // margin-top: 100px;
    // transform: translateZ(-50px) scale(1.5);
`;


export const BackgroundInnerShadow = styled.div`
    height: 700px;
    width: 3000px;
`;

export const  Box = styled.div`
    height: 700px;
    max-width: 101vw;
    margin: auto;
    box-shadow: inset 0 0 400px -150px;
    position: relative;
    background-color: #cbe0ec;
    // background-image: url("https://www.transparenttextures.com/patterns/brushed-alum-dark.png");
`;

export const HeadingContainer = styled.div`
    padding-top: 250px;
    width: 900px;
    margin: auto;
    position: relative;
`;

export const Heading = styled.h1`
    // font-size: 62px;
    font-size: 110px;
    text-align: center;
    font-weight: 600;
    // color: #00C2E6;
    letter-spacing: 3px;
    line-height: 80px;
    margin: 0;
    font-family: HelveticaNeueCondensedBold;
    letter-spacing: 5px;
    

    // background-image: url("https://www.transparenttextures.com/patterns/buried.png");
    // background-color: #00C2E6;
    background-image: linear-gradient(to top left,#00C2E6 5%,#00C2E6);
    // background-size: 100px 100px;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    // background-size: cover;
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
`;

export const CloudOne = styled.img`
    position: absolute;
    top: 220px;
    right: -300px;
    opacity: 0.5;

    :hover {
        opacity: 1;
    }
`;

export const CloudTwo = styled.img`
    position: absolute;
    bottom: 0;
    left: -300px;
    opacity: 0.5;

    :hover {
        opacity: 1;
    }
`;
