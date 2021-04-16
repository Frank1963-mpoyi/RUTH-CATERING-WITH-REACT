import React from 'react';

// import  ContactUsCarousel        from    './ContactUsCarousel';
import ContactUsForm             from './ContactUsForm';
import Footer      from "./Footer"
import GoogleMap from './GoogleMap';


export default function Home () {
    return (
        <>
            {/* <ContactUsCarousel  /> */}
            <ContactUsForm />
            <GoogleMap/>
            <Footer />
            
        </>
    );
}