import React from 'react';
import mylogo from "./cover2.jpg";

export default function Services () {
    return (
        <>
        <img src={mylogo} style={{width: "100%", height: "100vh"}} alt="" />
            <h1 className='service'>Services</h1>
        </>
    );
}