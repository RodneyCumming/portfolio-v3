import React, {useRef} from 'react';
import * as Styled from './Portfolio.styled.js'
import PortfolioImage from "../images/portfolioImage.png";
import useOnScreen from '../hooks/useOnScreen';

const Portfolio = () => {
    const ref = useRef();
    const onScreen = useOnScreen(ref, '-100px');
    return (
    <Styled.Portfolio>
        <Styled.PortfolioInner>
            <Styled.ImagePanel>
                <Styled.Icon
                    src={PortfolioImage}
                    alt="coffee icon"
                    onScreen={onScreen}
                />
            </Styled.ImagePanel>
            <Styled.TextPanel ref={ref}>
                <Styled.Heading onScreen={onScreen}>PORTFOLIO</Styled.Heading>
                <Styled.Body onScreen={onScreen}>Go to my portfolio to see my lastest projects I have build end-to-end to showcase my abilities using core web development technologies.</Styled.Body>
            </Styled.TextPanel>
        </Styled.PortfolioInner>
    </Styled.Portfolio>
)};

export default Portfolio;
