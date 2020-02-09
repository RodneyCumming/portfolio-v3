import React, { useRef } from 'react';
import * as Styled from './SimplePortfolioItemTwo.styled.js';
import crimsonPortfolioImage from '../images/snippets.svg';
import useOnScreen from '../hooks/useOnScreen';

const SimplePortfolioItemTwo = () => {
    const ref = useRef();
    const onScreen = useOnScreen(ref, '-100px');
    return (
    <Styled.SimplePortfolioItemTwo>
        <Styled.SimplePortfolioItemTwoInner>
            <Styled.Container ref={ref}>
                <Styled.Number onScreen={onScreen}>02.</Styled.Number>
                <Styled.ImageContainer onScreen={onScreen}>
                    <Styled.ImageAndOverlay >
                        <Styled.Image
                            src={crimsonPortfolioImage}
                            alt="Portfolio Item Screen Shot"
                        />
                        <Styled.ImageOverlay/>
                    </Styled.ImageAndOverlay>
                    
                    <Styled.Shadow />
                </Styled.ImageContainer>
                
                <Styled.Title onScreen={onScreen}>CODE SNIPPETS</Styled.Title>
            </Styled.Container>
            
        </Styled.SimplePortfolioItemTwoInner>
    </Styled.SimplePortfolioItemTwo>
)};

export default SimplePortfolioItemTwo;
