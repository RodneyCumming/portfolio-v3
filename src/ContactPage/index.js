import React from 'react';
import ContactHeader from '../ContactHeader';
import ContactForm from '../ContactForm';
import Contact from '../Contact';
import Footer from '../Footer';

const ContactPage = () => (
    <>
        <ContactHeader />
        <ContactForm />
        {/* <Contact background={"#192835"} showHeader={false} /> */}
        <Footer />
    </>
)

export default ContactPage;