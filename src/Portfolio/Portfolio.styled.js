import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Portfolio = styled.div`
    width: 3000px;
    background: #222838;
`; 

export const PortfolioInner = styled.div`
    overflow: auto;
    max-width: 100vw;
    margin: auto;
    width: 70vw;
    padding: 200px 0;
    display: flex;
`;

export const Heading = styled.h1`
    text-align: left;
    color: white;
    font-weight: 700;
    font-size: 100px;
    line-height: 1;

    opacity: 0;
    transform: translateY(10vh);
    transition: all 0.6s;

    ${props => props.onScreen && `
        opacity: 1;
        transform: none;
        transition: opacity 1.5s ease-in, transform 0.6s ease-out;
    `}
`;

export const Body = styled.p`
    text-align: left;
    color: #d3d3d3;
    line-height: 2em;
    font-size: 18px;
    font-family: Lato,serif;
    color: #B5B5B5;
    margin-top: 30px;

    opacity: 0;
    transform: translateY(10vh);
    transition: all 0.6s;

    ${props => props.onScreen && `
        opacity: 1;
        transform: none;
        transition: opacity 1.5s ease-in, transform 0.6s ease-out;
    `}
`;


export const TextPanel = styled.div`
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 5vw;
`;

export const ImagePanel = styled.div`
    width: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5vw;
`;

export const Button = styled(Link)`
    background: #3b4873;
    padding: 16px 50px;
    margin-top: 40px;
    font-size: 20px;
    width: fit-content;
    text-decoration: none;
    color: #fff;
    font-family: Lato,serif;
    border-radius: 10px;
    font-size: 18px;
    transition: background 0.2s;

    :hover {
        cursor: pointer;
        background: #495c9a;
    }

    opacity: 0;
    transform: translateX(-10vh);
    transition: all 0.6s;

    ${props => props.onScreen && `
        opacity: 1;
        transform: none;
        transition: opacity 1.5s ease-in, transform 0.6s ease-out, background 0.2s;
    `}

`;

export const Icon = styled.img`
    max-width: 100%;
    width: 70%;

    :after {
        content: '';
        position: absolute;
        bottom: -90px;
        height: 50px;
        width: 100%;
        left: 0;
        background: #333550;
        border-radius: 50%;
        box-shadow: inset 0 0 10px 10px #40415e;
    }

    opacity: 0;
    transform: translateX(-10vh);
    transition: all 0.6s;

    ${props => props.onScreen && `
        opacity: 1;
        transform: none;
        transition: opacity 1.5s ease-in, transform 0.6s ease-out;
    `}
`;



