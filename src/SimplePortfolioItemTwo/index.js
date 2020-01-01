import React from 'react';
import * as Styled from './SimplePortfolioItemTwo.styled.js';
import crimsonPortfolioImage from '../images/snippets.svg';

const SimplePortfolioItemTwo = () => (
    <Styled.SimplePortfolioItemTwo>
        <Styled.SimplePortfolioItemTwoInner>
            <Styled.Container>
                <Styled.Number>02.</Styled.Number>
                <Styled.ImageContainer>
                    <Styled.Image
                        src={crimsonPortfolioImage}
                        alt="Portfolio Item Screen Shot"
                    />
                    <Styled.ImageOverlay/>
                </Styled.ImageContainer>
                
                <Styled.Title>CODE SNIPPETS</Styled.Title>
            </Styled.Container>
            
        </Styled.SimplePortfolioItemTwoInner>
    </Styled.SimplePortfolioItemTwo>
);

export default SimplePortfolioItemTwo;
