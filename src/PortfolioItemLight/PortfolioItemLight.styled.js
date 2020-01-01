import styled from 'styled-components';

export const PortfolioItemLight = styled.div`
    width: 3000px;
    background: #cfdbde;
`; 

export const PortfolioItemLightInner = styled.div`
    overflow: auto;
    max-width: 100vw;
    margin: auto;
    padding: 100px;
`;

export const Container = styled.div`
    background: #eef2f3;
    min-height: 200px;
    box-shadow: 0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025);
    border-radius: 8px;
    max-width: 1160px;
    margin: auto;
    
`;

export const HeadingContainer = styled.div`
    padding: 50px;
    border-radius: 8px 8px 0 0;
    display: flex;
    justify-content: space-between;
`;

export const Heading = styled.h1`
    color: #32325d;
    font-weight: 700;
    font-size: 36px;
    margin: 0;
`;

export const Body = styled.p`
    color: #32325d;
    line-height: 1.6em;
    font-size: 22px;
    font-family: Lato,serif;
    margin: 0;
`;

export const InnerContainer = styled.div`
    padding: 0 50px 50px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    perspective: 1500px;
`;

export const ImageContainer = styled.div`
    lighting-angle: 300deg;
    margin: -30px -70px 0 10px;
    box-shadow: 0px 62.5px 125px -25px rgba(50,50,93,.5),0px 37.5px 75px -37.5px rgba(0,0,0,.6);
    transition-property: transform,box-shadow,-webkit-transform,-webkit-box-shadow;
    transition-duration: .25s;
    transition-timing-function: cubic-bezier(.165,.84,.44,1);

    transform: rotate3d(0.5,-0.866,0,19deg);
    box-shadow: 34.3px 62.5px 125px -25px rgba(50,50,93,.5),20.6px 37.5px 75px -37.5px rgba(0,0,0,.6);
`;
export const Image = styled.img`
    width: 100%;
`;

export const ImageLink = styled.a`
width: 100%;

:hover ${ImageContainer} {
    transform: rotate3d(0.5,-0.866,0,19deg) translateZ(30px);
    box-shadow: 38.4px 70px 140px -28px rgba(50,50,93,.47),23px 42px 84px -42px rgba(0,0,0,.57);
    cursor: pointer;
}
`;

export const HeadingCopy = styled.div`
    
`;

export const HeadingButton = styled.button`
color: #fff;
background: #37a59f;
height: 40px;
border-radius: 4px;
padding: 0 20px;
font-size: 15px;
box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);

:hover {
    cursor: pointer;
    background: #7795f8;
    transform: translateY(-1px);
}
`;

export const unorderedList = styled.ul`
    margin-left: 15px;
`;