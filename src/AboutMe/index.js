import React, {useState, useEffect, useRef} from 'react';
import * as Styled from './AboutMe.styled.js'
import CoffeeCup from "../images/icons/purpleCup.png";
import useOnScreen from '../hooks/useOnScreen'

const AboutMe = () => {
    const ref = useRef();
    const onScreen = useOnScreen(ref, '-100px');
    return (
    <Styled.AboutMe>
        <Styled.AboutMeInner>
            <Styled.TextPanel ref={ref} >
                <Styled.Heading onScreen={onScreen}>ABOUT ME</Styled.Heading>
                <Styled.Body onScreen={onScreen}>Hey there, I'm Rodney. I'm passionate about creating beautiful, user-friendly websites using clean, modular code. I love learning about the latest technologies and applying them to produce high quality work.</Styled.Body>
                {/* <Styled.Body>I also enjoy reading, drinking instant coffee and playing a bit of blitz chess. I like watching a fair bit of sport and try to keep reasonably fit and active.</Styled.Body> */}
            </Styled.TextPanel>
            <Styled.ImagePanel onClick={() => console.log(onScreen)}>
                <Styled.Icon
                    src={CoffeeCup}
                    alt="coffee icon"
                    onScreen={onScreen}
                />
                <Styled.Icon
                    src={CoffeeCup}
                    alt="coffee icon"
                    onScreen={onScreen}
                />
                <Styled.Icon
                    src={CoffeeCup}
                    alt="coffee icon"
                    onScreen={onScreen}
                />
                <Styled.Icon
                    src={CoffeeCup}
                    alt="coffee icon"
                    onScreen={onScreen}
                />
                <Styled.Icon
                    src={CoffeeCup}
                    alt="coffee icon"
                    onScreen={onScreen}
                />
                <Styled.Icon
                    src={CoffeeCup}
                    alt="coffee icon"
                    onScreen={onScreen}
                />
                <Styled.Icon
                    src={CoffeeCup}
                    alt="coffee icon"
                    onScreen={onScreen}
                />
                <Styled.Icon
                    src={CoffeeCup}
                    alt="coffee icon"
                    onScreen={onScreen}
                />
                <Styled.Icon
                    src={CoffeeCup}
                    alt="coffee icon"
                    onScreen={onScreen}
                />
            </Styled.ImagePanel>
           
        </Styled.AboutMeInner>
    </Styled.AboutMe>
)};

export default AboutMe;


