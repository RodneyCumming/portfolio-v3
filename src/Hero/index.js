import React from 'react';
import * as Styled from './Hero.styled'
import AboutMe from '../AboutMe'
import Skills from '../Skills'
import Portfolio from '../Portfolio'
import Contact from '../Contact'
import Footer from '../Footer'

import layer_1 from "../images/parallax/MoutainsLayerOne.png";
import layer_2 from "../images/parallax/layer_2.svg";
import layer_3 from "../images/parallax/layer_3.svg";
import layer_4 from "../images/parallax/layer_4.svg";
import Cloud from "../images/cloud.svg";

const Hero = () => {
    return (
        <Styled.Hero>
            <Styled.ParallaxLayerOne>
                <Styled.BackgroundInnerShadow>
                    <Styled.Box>
                    <Styled.HeadingContainer>
                        <Styled.CloudOne
                            src={Cloud}
                            alt="cloud"
                            height={55}
                        />
                        <Styled.Heading>RODNEY CUMMING</Styled.Heading>
                        <Styled.SubHeading>Web Developer</Styled.SubHeading>
                        <Styled.CloudTwo
                            src={Cloud}
                            alt="cloud"
                            height={55}
                        />
                    </Styled.HeadingContainer>
                    
                    
                    </Styled.Box>
                    
                </Styled.BackgroundInnerShadow>
            </Styled.ParallaxLayerOne>
            <Styled.ParallaxLayerTwo>

                 <img
                    src={layer_1}
                    height="455px"
                    width="3000px"
                    className="parallax__img"
                    alt="mountains"
                />
            </Styled.ParallaxLayerTwo>
            <Styled.ParallaxLayerThree>
                <img
                    src={layer_2}
                    height="455px"
                    width="3000px"
                    className="parallax__img"
                    alt="mountains"
                />
            </Styled.ParallaxLayerThree>

            <Styled.ParallaxLayerFour>
                <img
                    src={layer_3}
                    height="455px"
                    width="3000px"
                    className="parallax__img"
                    alt="mountains"
                />
            </Styled.ParallaxLayerFour>
            <Styled.ParallaxLayerFive>
                <img
                    src={layer_4}
                    height="200px"
                    width="3000px"
                    className="parallax__img"
                    alt="mountains"
                />
                <AboutMe />
                <Skills />
                <Portfolio />
                <Contact showHeader/>
                <Footer />
            </Styled.ParallaxLayerFive>
            
            </Styled.Hero>
    )
}

export default Hero;