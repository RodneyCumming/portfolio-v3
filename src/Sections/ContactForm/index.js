import React, {useState} from 'react';
import * as Styled from './ContactForm.styled.js';
import SendIcon from 'Images/icons/sendIcon2.svg';

const ContactForm = () => {
    return (
    <Styled.ContactForm>
        <Styled.ContactFormInner>
            <Styled.ContactFormContainer method="post" name="contact">
                <input type="hidden" name="form-name" value="contact" />
                <Styled.FormMiddlePanel>
                    <Styled.FormHeader>SEND MESSAGE</Styled.FormHeader>
                    <Styled.TextInput name="name" type="text" placeholder="Name..." autocomplete="foo" rightMargin/>
                    <Styled.TextInput name="email" type="text" placeholder="Email..." autocomplete="foo"/>
                    <Styled.TextAreaInput name="message" type="text" rows="8" placeholder="Message..." spellcheck="false"/>
                </Styled.FormMiddlePanel>
                <Styled.SendButton type="submit"><Styled.SendIcon src={SendIcon}/></Styled.SendButton>
            </Styled.ContactFormContainer>
            
        </Styled.ContactFormInner>
    </Styled.ContactForm>
)};

export default ContactForm;
