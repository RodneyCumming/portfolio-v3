import styled, {keyframes} from 'styled-components';

export const ContactHeader = styled.div`
    width: 3000px;
    background: #1a2835;
`; 

export const ContactHeaderInner = styled.div`
    overflow: auto;
    max-width: 100vw;
    height: 100vh;
    max-height: 1000px;
    margin: auto;
    padding: 100px;
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
    background: linear-gradient(to right,#28d091,#9b7dd5);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-size: cover;
`;




export const Body = styled.p`
    text-align: center;
    color: #d3d3d3;
    line-height: 1.6em;
    font-size: 22px;
    font-family: Lato,serif;
`;
