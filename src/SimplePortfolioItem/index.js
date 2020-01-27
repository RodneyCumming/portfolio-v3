import React, {useRef, useState} from 'react';
import * as Styled from './SimplePortfolioItem.styled.js';
import crimsonPortfolioImage from '../images/crimsonPortfolioImage.png';
import useOnScreen from '../hooks/useOnScreen';



const SimplePortfolioItem = props => {
    const {name, image, textColor, bgColor, boxShadowColor, shadowColor, overlayColor, link, githubLink} = props.data;
    const {index} = props;
    console.log(bgColor)
    console.log(index);
    const ref = useRef();
    const onScreen = useOnScreen(ref, '-100px');
    return (
    <Styled.SimplePortfolioItem>
        <Styled.SimplePortfolioItemInner>
            <Styled.Container ref={ref} bgColor={bgColor} boxShadowColor={boxShadowColor}>
                <Styled.Number onScreen={onScreen} textColor={textColor}>{`0${index + 1}.`}</Styled.Number>
                <Styled.ImageContainer>
                    <Styled.ImageAndOverlay>
                        <Styled.Image
                            src={image}
                            alt="Portfolio Item Screen Shot"
                        />
                        <Styled.ImageOverlay bgColor={overlayColor ? overlayColor : bgColor}/>
                    </Styled.ImageAndOverlay>
                    
                    <Styled.Shadow bgColor={bgColor} shadowColor={shadowColor} />
                </Styled.ImageContainer>
                <Styled.Title onScreen={onScreen}>{name}</Styled.Title>
                <Styled.ButtonContainer>
                {link && (<Styled.Button bgColor={bgColor} href={link}>DEMO</Styled.Button>)}
                {githubLink && (<Styled.Button bgColor={bgColor} secondButton={true} href={githubLink}>GITHUB</Styled.Button>)}
                </Styled.ButtonContainer>


            </Styled.Container>
            
        </Styled.SimplePortfolioItemInner>
    </Styled.SimplePortfolioItem>
)};

export default SimplePortfolioItem;
