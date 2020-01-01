import styled from 'styled-components';

export const AboutMe = styled.div`
    width: 3000px;
    background: #222838;
`; 

export const AboutMeInner = styled.div`
    max-width: 100vw;
    margin: auto;
    width: 70vw;
    padding: 200px 0;
    display: flex;
    overflow: hidden;
`;

export const Heading = styled.h1`
    text-align: left;
    color: #bbc3da;
    font-weight: 700;
    font-size: 100px;
    line-height: 1;

    opacity: 0;
    transform: translateY(10vh);
    transition: all 0s;

    ${props => props.onScreen && `
        opacity: 1;
        transform: none;
        transition: opacity 1.5s ease-in, transform 0.6s ease-out;
    `}
`;

export const Body = styled.p`
    text-align: left;
    line-height: 2em;
    font-size: 18px;
    font-family: Lato,serif;
    color: #B5B5B5;
    margin-top: 30px;

    opacity: 0;
    transform: translateY(10vh);
    transition: all 0s;
    will-change: opacity, visibility;

    ${props => props.onScreen && `
        opacity: 1;
        transform: none;
        visibility: visible;
        transition: opacity 1.5s ease-in, transform 0.7s ease-out;
    `}
`;


export const TextPanel = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 5vw;

    

`;

export const ImagePanel = styled.div`
    width: 50%;
    display: inline-grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: start;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    margin-left: 5vw;
`;

export const Icon = styled.img`
    // height: 60px;
    opacity: 0;
    transform: translateX(10vw);
    transition: all 0s;
    overflow: 0;

    ${props => props.onScreen && `
        opacity: 1;
        transform: none;
        transition: opacity 1.5s ease-in, transform 0.6s ease-out;
    `}
`;



