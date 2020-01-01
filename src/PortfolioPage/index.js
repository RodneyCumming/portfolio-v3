import React from 'react';

import PortfolioHeader from '../PortfolioHeader';
import Footer from '../Footer';
import SimplePortfolioItem from '../SimplePortfolioItem';
import SimplePortfolioItemTwo from '../SimplePortfolioItemTwo';
import SimplePortfolioItemThree from '../SimplePortfolioItemThree';
import * as Styled from './PortfolioPage.styled';
const PortfolioPage = () => (
    <Styled.PortfolioPage>
        <PortfolioHeader />
        <SimplePortfolioItem />
        <SimplePortfolioItemTwo />
        <SimplePortfolioItemThree />
        <Footer />
    </Styled.PortfolioPage>
)

export default PortfolioPage;