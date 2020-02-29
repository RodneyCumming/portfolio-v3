import React, {useRef} from 'react';
import ContactHeader from 'Sections/ContactHeader';
import ContactForm from 'Sections/ContactForm';
import ContactButtonsSection from 'Sections/ContactButtonsSection';
import Footer from 'Sections/Footer';

const ContactPage = () => {
    const ref = useRef();
    const handleClick = () => {
        console.log(ref);
        ref.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
    };
    return (
    <>
        <ContactHeader handleClick={handleClick}/>
        <ContactForm />
        <div ref={ref}></div>
        <ContactButtonsSection  />
        <Footer />
    </>
)}

export default ContactPage;