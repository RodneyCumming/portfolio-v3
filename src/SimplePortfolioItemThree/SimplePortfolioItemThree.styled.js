import styled from 'styled-components';

export const SimplePortfolioItemThree = styled.div`
    width: 3000px;
    background: #39757f;
    scroll-snap-align: start;
`; 

export const SimplePortfolioItemThreeInner = styled.div`
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
    background: #2d4463;
    position: relative;
    box-shadow: inset 0 0 50px 50px #20334c;
    scroll-snap-align: start;
`;

export const Image = styled.img`
    // width: 50vw;
    // max-width: 600px;
    // margin: auto;
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    // display: block;
    // display: block;
    width: 100%;
`;

export const ImageOverlay = styled.div`
    height: 100%;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    background: #15263e;
    opacity: 0.6;
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
`;


export const ImageContainer = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50vw;
    max-width: 600px;

    &:after {
        content: '';
        position: absolute;
        bottom: -90px;
        height: 50px;
        width: 100%;
        left: 0;
        background: #20334c;
        border-radius: 50%;
        box-shadow: inset 0 0 10px 10px #2d4463;
    }
`;


export const Number = styled.h1`
    top: 40px;
    left: 50px;
    margin: 0;
    color: #23b7ff;
    position: absolute;
    font-size: 110px;
    font-family: HelveticaNeueCondensedBold;
    letter-spacing: 5px;
`;

