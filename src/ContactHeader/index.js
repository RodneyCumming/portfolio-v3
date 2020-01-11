import React, {useRef} from 'react';
import * as Styled from './ContactHeader.styled.js';
import useOnScreen from '../hooks/useOnScreen';

const ContactHeader = () => {
    const ref = useRef();
    const onScreen = useOnScreen(ref, '-100px');
    return (
    <Styled.ContactHeader>
        <Styled.ContactHeaderInner>
            <Styled.Container ref={ref}>
                <Styled.Heading onScreen={onScreen}>CONTACT</Styled.Heading>
                <Styled.Body onScreen={onScreen}>If you think we could work together in some capcity or just want to reach out, get in touch and I will get back to you.</Styled.Body>
                <Styled.Button onScreen={onScreen}>EMAIL</Styled.Button>
            </Styled.Container>
        </Styled.ContactHeaderInner>
    </Styled.ContactHeader>
)};

export default ContactHeader;