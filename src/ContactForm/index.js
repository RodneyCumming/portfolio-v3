import React from 'react';
import * as Styled from './ContactForm.styled.js'

const ContactForm = () => (
    <Styled.ContactForm>
        <Styled.ContactFormInner>
            <Styled.ParallaxBall />
            <Styled.ParallaxBallTwo />
            <Styled.ContactFormContainer>
                <Styled.FormHeader>SEND MESSAGE</Styled.FormHeader>
                <Styled.TextInput name="name" type="text" placeholder="Name..." autocomplete="foo" rightMargin/>
                <Styled.TextInput name="email" type="text" placeholder="Email..." autocomplete="foo"/>
                <Styled.TextAreaInput name="message" type="text" rows="8" placeholder="Message..." spellcheck="false"/>
                <Styled.SendButton>Send</Styled.SendButton>
            </Styled.ContactFormContainer>
        </Styled.ContactFormInner>
    </Styled.ContactForm>
);

export default ContactForm;
