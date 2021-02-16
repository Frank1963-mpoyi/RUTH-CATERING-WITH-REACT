import React from 'react';
import mylogo from "./images/cover3.jpg";

export default function AboutUs () {
    return (
        <>
         <img src={mylogo} style={{width: "100%", height: "100vh"}} alt="" />
            <h1 className='about-us'>About Us</h1>
        </>
    );
}