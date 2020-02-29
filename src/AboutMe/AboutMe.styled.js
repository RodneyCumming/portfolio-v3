import styled from 'styled-components';
import screenSize from 'styles/mediaQueries';

export const AboutMe = styled.div`
    width: 3000px;
    background: #222838;

    opacity: 0;
    transition: opacity 1.5s;
    ${props => props.onScreen && `
        opacity: 1;
        transition: opacity 1.5s;
    `}
`; 

export const AboutMeInner = styled.div`
    max-width: 100vw;
    margin: auto;
    width: 70vw;
    padding: 100px 0;
    display: flex;
    overflow: hidden;
    flex-direction: column;

    ${screenSize.minDesktop`
        flex-direction: row;
        padding: 200px 0;
    `}
    
`;

export const Heading = styled.h1`
    text-align: center;
    color: #bbc3da;
    font-weight: 700;
    font-size: 70px;
    line-height: 1;

    opacity: 0;
    transform: translateY(10vh);
    transition: all 0.6s;

    ${props => props.onScreen && `
        opacity: 1;
        transform: none;
        transition: opacity 1.5s ease-in, transform 0.6s ease-out;
    `}

    ${screenSize.minDesktop`
        text-align: left;
        font-size: 100px;
    `}
`;

export const Body = styled.p`
    text-align: center;
    line-height: 2em;
    font-size: 18px;
    font-family: Lato,serif;
    color: #B5B5B5;
    margin-top: 30px;

    opacity: 0;
    transform: translateY(10vh);
    transition: all 0.6s;
    will-change: opacity, visibility;

    ${screenSize.minDesktop`
        text-align: left;
    `}

    ${props => props.onScreen && `
        opacity: 1;
        transform: none;
        visibility: visible;
        transition: opacity 1.5s ease-in, transform 0.7s ease-out;
    `}

   
`;


export const TextPanel = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 5vw;
`;

export const ImagePanel = styled.div`
    width: 100%;
    display: inline-grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: start;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    margin-top: 4rem;
    

    ${screenSize.minDesktop`
        margin-left: 5vw;
    `}
`;

export const Icon = styled.img`
    opacity: 0;
    transform: translateX(10vw);
    transition: all 0.6s;
    overflow: 0;
    height: 40px;

    ${props => props.onScreen && `
        opacity: 1;
        transform: none;
        transition: opacity 1.5s ease-in, transform 0.6s ease-out;
    `}

    ${screenSize.minLargeMobile`
        height: 60px;
    `}
    
    ${screenSize.minDesktop`
        margin-left: 5vw;
        height: 70px;
    `}
`;



