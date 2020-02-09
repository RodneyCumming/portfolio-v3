import React from 'react';
import * as Styled from './SimplePortfolioItemThree.styled.js';
import prtfolioImage from '../images/rdny.png';

const SimplePortfolioItemThree = () => (
    <Styled.SimplePortfolioItemThree>
        <Styled.SimplePortfolioItemThreeInner>
            <Styled.Container>
                <Styled.Number>03.</Styled.Number>
                <Styled.ImageContainer>
                    <Styled.Image
                        src={prtfolioImage}
                        alt="Portfolio Item Screen Shot"
                    />
                    <Styled.ImageOverlay/>
                </Styled.ImageContainer>
                
                <Styled.Title>PORTFOLIO V2</Styled.Title>
            </Styled.Container>
            
        </Styled.SimplePortfolioItemThreeInner>
    </Styled.SimplePortfolioItemThree>
);

export default SimplePortfolioItemThree;
