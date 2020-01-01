import React from 'react';
import * as Styled from './PortfolioHeader.styled.js'

const PortfolioHeader = () => (
    <Styled.PortfolioHeader>
        <Styled.PortfolioHeaderInner>
            <Styled.Container>
                <Styled.Heading>PORTFOLIO</Styled.Heading>
                <Styled.Body>Go to my Portfolio to see my lastest projects I have build end-to-end to showcase my abilities using core web development technologies.</Styled.Body>
            </Styled.Container>
        </Styled.PortfolioHeaderInner>
    </Styled.PortfolioHeader>
);

export default PortfolioHeader;
