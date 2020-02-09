import React, {useRef, useState} from 'react';
import * as Styled from './ContactButtonsSection.styled.js'
import Phone from "../images/phone.png";
import Email from "../images/email.png";
import useOnScreen from '../hooks/useOnScreen';

const ContactButtonsSection = props => {
    const ref = useRef();
    const onScreen = useOnScreen(ref, '-100px');
    const [showContactButtons, setContactButtons] = useState(false);

    return (
    <Styled.ContactButtonsSection background={props.background}>
        <Styled.ContactInner ref={ref} showContactButtons={showContactButtons}>
                <Styled.TextPanel >
                    <Styled.Heading onScreen={onScreen}>CALL OR EMAIL</Styled.Heading>
                    {/* <Styled.Body onScreen={onScreen}>I love getting calls and emails regarding web development so please get in touch, and I will respond super quick.</Styled.Body> */}
                </Styled.TextPanel>
            <Styled.ImagePanel showContactButtons={showContactButtons} onScreen={onScreen}>
                <Styled.IconAndText>
                <Styled.Icon
                    src={Phone}
                    alt="coffee icon"
                    onScreen={onScreen}
                    showContactButtons={showContactButtons}
                    onClick={() => setContactButtons(!showContactButtons)}
                />
                <Styled.ContactText showContactButtons={showContactButtons}>+64 27 635 9269</Styled.ContactText>
                </Styled.IconAndText>
                <Styled.IconAndText>
                <Styled.IconTwo
                    src={Email}
                    alt="coffee icon"
                    onScreen={onScreen}
                    showContactButtons={showContactButtons}
                    onClick={() => setContactButtons(!showContactButtons)}
                />
                <Styled.ContactTextTwo showContactButtons={showContactButtons}>RODNEYCUMMING@GMAIL.COM</Styled.ContactTextTwo>
                </Styled.IconAndText>
                
            </Styled.ImagePanel>
        </Styled.ContactInner>
    </Styled.ContactButtonsSection>
)};

export default ContactButtonsSection;
