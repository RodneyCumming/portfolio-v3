import React, { useRef } from "react";
import ContactHeader from "Sections/ContactHeader";
import ContactForm from "Sections/ContactForm";
import ContactButtonsSection from "Sections/ContactButtonsSection";
import Footer from "Sections/Footer";
import * as Styled from "./ContactPage.styled";

const ContactPage = () => {
  const ref = useRef();
  const handleClick = () => {
    console.log(ref);
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };
  return (
    <Styled.Parallax>
      <ContactHeader handleClick={handleClick} />
      <ContactForm />
      <div ref={ref}></div>
      <ContactButtonsSection />
      <Footer />
    </Styled.Parallax>
  );
};

export default ContactPage;
