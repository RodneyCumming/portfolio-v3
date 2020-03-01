import React, { useRef, useState } from "react";
import * as Styled from "./ContactButtonsSection.styled.js";
import Phone from "Images2//phone.png";
import Email from "Images2//email.png";
import useOnScreen from "Hooks2/useOnScreen";

const ContactButtonsSection = props => {
  const ref = useRef();
  const onScreen = useOnScreen(ref, "-100px");
  const [showContactButtons, setContactButtons] = useState(false);

  return (
    <Styled.ContactButtonsSection background={props.background}>
      <Styled.ContactInner ref={ref} showContactButtons={showContactButtons}>
        <Styled.TextPanel>
          <Styled.Heading onScreen={onScreen}>CALL OR EMAIL</Styled.Heading>
        </Styled.TextPanel>
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
    </Styled.ContactButtonsSection>
  );
};

export default ContactButtonsSection;
