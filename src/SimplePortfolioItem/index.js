import React, {useRef, useState} from 'react';
import * as Styled from './SimplePortfolioItem.styled.js';
import crimsonPortfolioImage from '../images/crimsonPortfolioImage.png';
import useOnScreen from '../hooks/useOnScreen';

const SimplePortfolioItem = () => {
    const [showInfoBoxes, setShowInfoBoxes] = useState(false);
    const [showOneInfoBox, setShowOneInfoBox] = useState(0);
    const ref = useRef();
    const onScreen = useOnScreen(ref, '-100px');
    return (
    <Styled.SimplePortfolioItem>
        <Styled.SimplePortfolioItemInner>
            <Styled.Container ref={ref}>
                <Styled.InfoBoxOne onScreen={showInfoBoxes || showOneInfoBox === 1} onMouseEnter={() => setShowOneInfoBox(1)} onMouseLeave={() => setShowOneInfoBox(0)}>
                    <Styled.InfoBoxHeading>ABOUT</Styled.InfoBoxHeading>
                    <Styled.InfoBoxParagraph>Worked within a agile team to improve this website across a varities of benchmarks. </Styled.InfoBoxParagraph>
                </Styled.InfoBoxOne>
                <Styled.InfoBoxTwo onScreen={showInfoBoxes || showOneInfoBox === 2} onMouseEnter={() => setShowOneInfoBox(2)} onMouseLeave={() => setShowOneInfoBox(0)}>
                    <Styled.InfoBoxHeading>TECHNOLOGY</Styled.InfoBoxHeading>
                    <Styled.InfoBoxParagraph>REACT, JAVASCRIPT, CSS, STYLED COMPONENTS, HEROKU, BUILDKITE, GATSBY, CONTENTFUL, STORYBLOK</Styled.InfoBoxParagraph>
                </Styled.InfoBoxTwo>
                <Styled.InfoBoxThree onScreen={showInfoBoxes || showOneInfoBox === 3} onMouseEnter={() => setShowOneInfoBox(3)} onMouseLeave={() => setShowOneInfoBox(0)}>
                    <Styled.InfoBoxHeading>TECHNOLOGY</Styled.InfoBoxHeading>
                    <Styled.InfoBoxParagraph>REACT, JAVASCRIPT, CSS, STYLED COMPONENTS, HEROKU, BUILDKITE, GATSBY, CONTENTFUL, STORYBLOK</Styled.InfoBoxParagraph>
                </Styled.InfoBoxThree>
                <Styled.Number onScreen={onScreen}>01.</Styled.Number>
                <Styled.ImageContainer onMouseEnter={() => setShowInfoBoxes(true)} onMouseLeave={() => setShowInfoBoxes(false)} onScreen={onScreen}>
                    <Styled.ImageAndOverlay >
                        <Styled.Image
                            src={crimsonPortfolioImage}
                            alt="Portfolio Item Screen Shot"
                        />
                        <Styled.ImageOverlay/>
                    </Styled.ImageAndOverlay>
                    
                    <Styled.Shadow />
                    <Styled.Title onScreen={onScreen}>CRIMSON EDUCATION</Styled.Title>
                </Styled.ImageContainer>
                
                
                
            </Styled.Container>
            
        </Styled.SimplePortfolioItemInner>
    </Styled.SimplePortfolioItem>
)};

export default SimplePortfolioItem;
