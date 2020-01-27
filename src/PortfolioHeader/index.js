import React, { useRef } from 'react';
import * as Styled from './PortfolioHeader.styled.js'
import useOnScreen from '../hooks/useOnScreen';
    
const PortfolioHeader = () => {
    const ref = useRef();
    const onScreen = useOnScreen(ref, '-100px');
    return (
    <Styled.PortfolioHeader>
        <Styled.PortfolioHeaderInner>
            <Styled.Container ref={ref} >
                <Styled.Heading onScreen={onScreen}>PORTFOLIO</Styled.Heading>
                <Styled.Body onScreen={onScreen}>My portfolio includes a variety of projects I have build end-to-end to improve my competence using web development technologies. I have many other projects at my Github page that you can also check out.</Styled.Body>
                <Styled.Button onScreen={onScreen} href="https://github.com/RodneyCumming" target="_blank">GITHUB</Styled.Button>
            </Styled.Container>
        </Styled.PortfolioHeaderInner>
    </Styled.PortfolioHeader>
    )
};

export default PortfolioHeader;
