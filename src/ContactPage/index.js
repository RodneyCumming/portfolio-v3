import React, {useRef} from 'react';
import ContactHeader from '../ContactHeader';
import ContactForm from '../ContactForm';
import ContactButtonsSection from '../ContactButtonsSection';
import Footer from '../Footer';

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