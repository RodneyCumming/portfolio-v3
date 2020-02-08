import React, {useState, useEffect, useRef} from 'react';
import * as Styled from './AboutMe.styled.js'
import CoffeeCup from "../images/icons/purpleCup.png";
import useOnScreen from '../hooks/useOnScreen'

const AboutMe = () => {
    const ref = useRef();
    const onScreen = useOnScreen(ref, '-100px');

    const [showAboutMe, setShowAboutMe] = useState(false);
    useEffect(() => setShowAboutMe(true), []);

    return (
    <Styled.AboutMe onScreen={showAboutMe}>
        <Styled.AboutMeInner>
            <Styled.TextPanel ref={ref} >
                <Styled.Heading onScreen={onScreen}>ABOUT ME</Styled.Heading>
                <Styled.Body onScreen={onScreen}>Hey there, I'm Rodney. I'm passionate about creating beautiful, user-friendly modern websites using clean, modular code. I love learning about the latest technologies and applying them to produce high quality work.</Styled.Body> 
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


