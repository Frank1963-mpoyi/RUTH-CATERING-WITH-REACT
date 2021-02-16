import React from 'react';
import mylogo from "./cover1.jpg";


export default function ContactUs () {
    return (
        <>
        <img src={mylogo} style={{width: "100%", height: "100vh"}} alt="" />
            <h1 className='contact'>Contact Us</h1>
        </>
    );
}