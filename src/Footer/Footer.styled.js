import styled from 'styled-components';

export const Footer = styled.div`
    width: 3000px;
    background: #1a212f;
`; 

export const FooterInner = styled.div`
    overflow: auto;
    max-width: 100vw;
    margin: auto;
    padding: 100px;
    display: flex;
    justify-content: center;
    align-contern: center;

    opacity: 0;
    transform: translateX(10vh);
    transition: all 0s;

    ${props => props.onScreen && `
        opacity: 1;
        transform: none;
        transition: opacity 1.5s ease-in, transform 0.6s ease-out;
    `}
`;

export const Body = styled.p`
    text-align: center;
    color: #d3d3d3;
    line-height: 3rem;
    font-size: 16px;
    font-family: Lato,serif;
    align-self: center;
`;

export const Logo = styled.img`
    margin: 30px;
`;