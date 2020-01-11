import React, { useState, useRef, useLayoutEffect } from 'react';
import * as Styled from './Hero.styled'
import AboutMe from '../AboutMe'
import Skills from '../Skills'
import Portfolio from '../Portfolio'
import Contact from '../Contact'
import Footer from '../Footer'
import useOnScreen from '../hooks/useOnScreen'

import layer_1 from "../images/parallax/MoutainsLayerOne.png";
import layer_2 from "../images/parallax/layer_2.svg";
import layer_3 from "../images/parallax/layer_3.svg";
import layer_4 from "../images/parallax/layer_4.svg";
import Cloud from "../images/cloud.svg";

// const setImagesLoaded(oldArray => [...oldArray, newElement]);


const Hero = () => {
    const [imagesLoaded, setImagesLoaded] = useState([]);
    const ref = useRef();
    const scrollRef = useRef();
    
    const onScreen = useOnScreen(ref, '1000px');
    useLayoutEffect(() => scrollRef.current.scrollTo(0, 1000), [])
    useLayoutEffect(() => console.log('useLayouteffect', scrollRef))

    return (
        <Styled.Hero ref={ref}> 
            <Styled.ParallaxLayerOne >
                <Styled.BackgroundInnerShadow>
                    <Styled.Box>
                        <Styled.HeadingContainer show={imagesLoaded.length >= 5}> 
                            <Styled.CloudOne
                                src={Cloud}
                                alt="cloud"
                                height={55}
                                onLoad={() => setImagesLoaded([...imagesLoaded, 'cloud'])}
                                show={imagesLoaded.filter(value => value === 'cloud')[0]}
                                opacityDelayTime={0.8}
                            />
                            <Styled.Heading onScreen={onScreen} >RODNEY CUMMING</Styled.Heading>
                            <Styled.SubHeading onScreen={onScreen}>Web Developer</Styled.SubHeading>
                            <Styled.CloudTwo
                                src={Cloud}
                                alt="cloud"
                                height={55}
                                show={imagesLoaded.filter(value => value === 'cloud')[0]}
                                opacityDelayTime={0.8}
                            />
                        </Styled.HeadingContainer>


                    </Styled.Box>

                </Styled.BackgroundInnerShadow>
            </Styled.ParallaxLayerOne>
            <Styled.ParallaxLayerTwo>

                <Styled.Image
                    src={layer_1}
                    height="455px"
                    width="3000px"
                    className="parallax__img"
                    alt="mountains"
                    onLoad={() => setImagesLoaded([...imagesLoaded, 'layer1'])}
                    show={imagesLoaded.filter(value => value === 'layer1')[0]}
                    opacityDelayTime={1.2}
                />
            </Styled.ParallaxLayerTwo>
            <Styled.ParallaxLayerThree>
                <Styled.Image
                    src={layer_2}
                    height="455px"
                    width="3000px"
                    className="parallax__img"
                    alt="mountains"
                    onLoad={() => setImagesLoaded([...imagesLoaded, 'layer2'])}
                    show={imagesLoaded.filter(value => value === 'layer2')[0]}
                    opacityDelayTime={0.8}
                />
            </Styled.ParallaxLayerThree>

            <Styled.ParallaxLayerFour>
                <Styled.Image
                    src={layer_3}
                    height="455px"
                    width="3000px"
                    className="parallax__img"
                    alt="mountains"
                    onLoad={() => setImagesLoaded([...imagesLoaded, 'layer3'])}
                    show={imagesLoaded.filter(value => value === 'layer3')[0]}
                    opacityDelayTime={0.4}
                />
            </Styled.ParallaxLayerFour>
            <Styled.ParallaxLayerFive ref={scrollRef}>
                <Styled.Image
                    src={layer_4}
                    height="200px"
                    width="3000px"
                    className="parallax__img"
                    alt="mountains"
                    onLoad={() => setImagesLoaded([...imagesLoaded, 'layer4'])}
                    show={imagesLoaded.filter(value => value === 'layer4')[0]}
                    opacityDelayTime={0}
                    
                />
                <AboutMe  show={imagesLoaded.filter(value => value === 'layer4')[0]} />
                <Skills />
                <Portfolio />
                <Contact showHeader />
                <Footer />
            </Styled.ParallaxLayerFive>

        </Styled.Hero>
    )
}

export default Hero;