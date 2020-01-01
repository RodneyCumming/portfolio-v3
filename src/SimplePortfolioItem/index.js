import React, {useRef} from 'react';
import * as Styled from './SimplePortfolioItem.styled.js';
import crimsonPortfolioImage from '../images/crimsonPortfolioImage.png';
import useOnScreen from '../hooks/useOnScreen';

const SimplePortfolioItem = () => {
    const ref = useRef();
    const onScreen = useOnScreen(ref, '-100px');
    return (
    <Styled.SimplePortfolioItem>
        <Styled.SimplePortfolioItemInner>
            <Styled.Container ref={ref}>
                <Styled.Number onScreen={onScreen}>01.</Styled.Number>
                <Styled.ImageContainer onScreen={onScreen}>
                    <Styled.ImageAndOverlay>
                        <Styled.Image
                            src={crimsonPortfolioImage}
                            alt="Portfolio Item Screen Shot"
                        />
                        <Styled.ImageOverlay/>
                    </Styled.ImageAndOverlay>
                    
                    <Styled.Shadow />
                </Styled.ImageContainer>
                
                
                <Styled.Title onScreen={onScreen}>CRIMSON EDUCATION</Styled.Title>
            </Styled.Container>
            
        </Styled.SimplePortfolioItemInner>
    </Styled.SimplePortfolioItem>
)};

export default SimplePortfolioItem;
