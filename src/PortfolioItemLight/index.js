import React from 'react';
import * as Styled from './PortfolioItemLight.styled.js';
import PortfolioItemScreenShot from '../images/snippets.svg';

const PortfolioItemLight = () => (
    <Styled.PortfolioItemLight>
        <Styled.PortfolioItemLightInner>
            <Styled.Container>
                <Styled.HeadingContainer>
                    <Styled.HeadingCopy>
                        <Styled.Heading>Code Snippets</Styled.Heading>
                        <Styled.Body>Powerful tools to support fraud fighting professionals.</Styled.Body>
                    </Styled.HeadingCopy>
                    <Styled.HeadingButton>EXPLORE</Styled.HeadingButton>
                </Styled.HeadingContainer>
                <Styled.InnerContainer>
             
                    <Styled.unorderedList>
                        <li>
                        <h3>Optimized reviews</h3>
                        <p>Surface the most relevant data for more efficient and accurate manual&nbsp;reviews.</p>
                        </li>
                        <li>
                        <h3>Robust insights</h3>
                        <p>See rich analytics on fraud performance and dispute&nbsp;rates.</p>
                        </li>
                        <li>
                        <h3>Custom rules</h3>
                        <p>Set precise rules to flag, block, or dynamically apply 3D Secure to certain transactions.</p>
                        </li>
                        <li>
                        <h3>Block and allow lists</h3>
                        <p>Sync existing lists of trusted or blocked&nbsp;users.</p>
                        </li>
                    </Styled.unorderedList>
                    <Styled.ImageLink>
                    <Styled.ImageContainer>
                        <Styled.Image
                            src={PortfolioItemScreenShot}
                            alt="Portfolio Item Screen Shot"
                        />
                        </Styled.ImageContainer>
                    </Styled.ImageLink>
                    
                    
                </Styled.InnerContainer>
            </Styled.Container>
        </Styled.PortfolioItemLightInner>
    </Styled.PortfolioItemLight>
);

export default PortfolioItemLight;
