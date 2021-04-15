import React from 'react';

import  Car         from    './Carousel/Car';
import  About       from    './About/About';
import  Card        from    './Card/Card';
import  Menu        from    './Menu/Menu';
import  SocialIcon  from    './SocialMedia/SocialIcon';
import  Gallery     from    './Gallery/Gallery';
import  Footer      from    './Footer/Footer';



export default function Home () {
    return (
        <>
            <Car />
            <About />
            <Menu />
            <Card />
            <SocialIcon />
            <Gallery/>   
            <Footer /> 
        </>
    );
}