import React from 'react';
import ContactHeader from '../ContactHeader';
import ContactForm from '../ContactForm';
import ContactButtonsSection from '../ContactButtonsSection';
import Footer from '../Footer';

const ContactPage = () => (
    <>
        <ContactHeader />
        <ContactForm />
        <ContactButtonsSection />
        {/* <Contact background={"#192835"} showHeader={false} /> */}
        <Footer />
    </>
)

export default ContactPage;