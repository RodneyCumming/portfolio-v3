import styled from 'styled-components';

export const PortfolioHeader = styled.div`
    width: 3000px;
    background: #1a2835;
    scroll-snap-align: start;
`; 

export const PortfolioHeaderInner = styled.div`
    overflow: auto;
    max-width: 100vw;
    height: 100vh;
    max-height: 1000px;
    margin: auto;
    padding: 100px;
    scroll-snap-align: start;
`;

export const Container = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 200px;
`;


export const Heading = styled.h1`
    text-align: center;
    color: white;
    font-weight: 700;
    margin-bottom: 35px;
    margin-top: 0px;
    font-size: 100px;
    letter-spacing: 3px;
    // background: linear-gradient(65deg,#C95F62 25%,transparent 25%),linear-gradient(65deg,#40415E 50%,transparent 50%),linear-gradient(65deg,#C95F62 75%,transparent 75%), linear-gradient(65deg,#40415E 100%,transparent 100%);
    background: linear-gradient(to right, #C95F62 20%, #7778a5);
    // background-size: 100px 100px;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    // background-size: cover;

`;




export const Body = styled.p`
    text-align: center;
    color: #d3d3d3;
    line-height: 1.6em;
    font-size: 22px;
    font-family: Lato,serif;
`;
