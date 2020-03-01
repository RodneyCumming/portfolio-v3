import React, { useRef, useState } from "react";
import * as Styled from "./Contact.styled.js";
import Phone from "Images//phone.png";
import Email from "Images//email.png";
import useOnScreen from "Hooks/useOnScreen";

const Contact = props => {
  const ref = useRef();
  const onScreen = useOnScreen(ref, "-100px");
  const [showContactButtons, setContactButtons] = useState(false);

  return (
    <Styled.Contact background={props.background} id="contact-section">
      <Styled.ContactInner showContactButtons={showContactButtons}>
        {props.showHeader && (
          <Styled.TextPanel ref={ref}>
            <Styled.Heading
              onScreen={onScreen}
              onClick={() => console.log(showContactButtons)}
            >
              CONTACT
            </Styled.Heading>
            <Styled.Body onScreen={onScreen}>
              If you think we could work together in some capcity or just want
              to reach out, get in touch and I will get back to you as soon as
              possible.
            </Styled.Body>
          </Styled.TextPanel>
        )}
        <Styled.ImagePanel
          showContactButtons={showContactButtons}
          onScreen={onScreen}
        >
          <Styled.IconAndText>
            <Styled.Icon
              src={Phone}
              alt="coffee icon"
              onScreen={onScreen}
              showContactButtons={showContactButtons}
              onClick={() => setContactButtons(!showContactButtons)}
            />
            <Styled.ContactText showContactButtons={showContactButtons}>
              +64 27 635 9269
            </Styled.ContactText>
          </Styled.IconAndText>
          <Styled.IconAndText>
            <Styled.IconTwo
              src={Email}
              alt="coffee icon"
              onScreen={onScreen}
              showContactButtons={showContactButtons}
              onClick={() => setContactButtons(!showContactButtons)}
            />
            <Styled.ContactTextTwo showContactButtons={showContactButtons}>
              RODNEYCUMMING@GMAIL.COM
            </Styled.ContactTextTwo>
          </Styled.IconAndText>
        </Styled.ImagePanel>
      </Styled.ContactInner>
    </Styled.Contact>
  );
};

export default Contact;
