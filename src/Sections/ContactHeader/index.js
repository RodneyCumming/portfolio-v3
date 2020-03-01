import React, { useRef } from "react";
import * as Styled from "./ContactHeader.styled.js";
import useOnScreen from "Hooks/useOnScreen";

const ContactHeader = props => {
  const ref = useRef();
  const onScreen = useOnScreen(ref, "-100px");

  return (
    <Styled.ContactHeader>
      <Styled.ContactHeaderInner>
        <Styled.Container ref={ref}>
          <Styled.Heading onScreen={onScreen}>CONTACT</Styled.Heading>
          <Styled.Body onScreen={onScreen}>
            If you think we could work together in some capcity or just want to
            reach out, get in touch and I will get back to you as soon as
            possible.
          </Styled.Body>
          <Styled.Button
            onScreen={onScreen}
            onClick={() => props.handleClick()}
          >
            EMAIL
          </Styled.Button>
        </Styled.Container>
      </Styled.ContactHeaderInner>
    </Styled.ContactHeader>
  );
};

export default ContactHeader;
