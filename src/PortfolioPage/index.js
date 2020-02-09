import React, {useEffect, useRef } from 'react';

import PortfolioHeader from '../PortfolioHeader';
import Footer from '../Footer';
import SimplePortfolioItem from '../SimplePortfolioItem';
import SimplePortfolioItemTwo from '../SimplePortfolioItemTwo';
import SimplePortfolioItemThree from '../SimplePortfolioItemThree';
import * as Styled from './PortfolioPage.styled';
import crimsonPortfolioImage from '../images/crimsonPortfolioImage.png';
import crimsonEducation from '../images/crimsoneducation-small.png';
import codesnippets from '../images/codesnippets-small.png';
import rdny from '../images/rdny-small.png';
import typingPracticer from '../images/typing-practicer-small.png';
import loremIpsum from '../images/lorem-ipsum-small.png';
import portfolioV3 from '../images/portfolio-v3-small.png';
import crimsonPortfolioImage4 from '../images/typing-practicer.svg';
import crimsonPortfolioImage5 from '../images/spelling.png';

const portfolioItems =[
    {
        name: 'CRIMSON EDUCATION',
        image: crimsonEducation,
        textColor: 'white',
        bgColor: '#40415E',
        boxShadowColor: '#36374e',
        shadowColor: '#333550',
        link: 'https://www.crimsoneducation.org/nz'
    },
    {
        name: 'CODE SNIPPETS',
        image: codesnippets,
        textColor: 'white',
        bgColor: '#39757f',
        boxShadowColor: '#2b5961',
        shadowColor: '#2b5961',
        overlayColor: '#244248',
        link: 'https://www.codingsnippets.netlify.com',
        githubLink: 'https://github.com/RodneyCumming/snippets'
    },
    {
        name: 'PORTFOLIO V2',
        image: rdny,
        textColor: 'white',
        bgColor: '#2d4463',
        boxShadowColor: '#20334c',
        shadowColor: '#20334c',
        link: 'https://rdny.me/',
        githubLink: 'https://github.com/RodneyCumming/parallax-portfolio'
    },
    {
        name: 'LOREM IPSUM DOLOR',
        
        image: loremIpsum,
        textColor: 'white',
        bgColor: '#463a46',
        boxShadowColor: '#332c33',
        shadowColor: '#332c33',
        link: 'https://lorem-ipsum-dolor.netlify.com',
        githubLink: 'https://github.com/RodneyCumming/lorem-ipsum'
    },

    {
        name: 'TYPING PRACTICER',
        image: typingPracticer,
        textColor: 'white',
        bgColor: '#29475d',
        boxShadowColor: '#243b4c',
        shadowColor: '#243b4c',
        link: 'https://rodneycumming.github.io/react-typing/',
        githubLink: 'https://github.com/RodneyCumming/react-typing'
    },
    {
        name: 'THIS SITE',
        image: portfolioV3,
        textColor: 'white',
        bgColor: '#343954',
        boxShadowColor: '#2a2d40',
        shadowColor: '#2a2d40',
        
    },

]

const PortfolioPage = () => {
    const ref = useRef();
    useEffect(() => {
        ref.current.scrollIntoView()
    });
    return (
    <Styled.PortfolioPage ref={ref} >
        <PortfolioHeader />
        <Styled.PortfolioItemsGrid>
            {portfolioItems.map((portfolioItemData, index) => (
                <SimplePortfolioItem data={portfolioItemData} index={index} />
            ))}
            
            {/* <SimplePortfolioItemTwo /> */}
            {/*<SimplePortfolioItemTwo />
            <SimplePortfolioItem />
            <SimplePortfolioItem />  */}
            {/* <SimplePortfolioItemThree />  */}
        </Styled.PortfolioItemsGrid>
        <Footer />
    </Styled.PortfolioPage>
)}

export default PortfolioPage;