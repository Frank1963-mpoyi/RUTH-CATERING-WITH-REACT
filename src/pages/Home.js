import React from 'react';

import  Car         from    '../components/Carousel/Car';
import  About       from    '../components/About/About';
import  Card        from    '../components/Card/Card';
import  Menu        from    '../components/Menu/Menu';
import  SocialIcon  from    '../components/SocialMedia/SocialIcon';
import  Gallery     from    '../components/Gallery/Gallery';
import  Footer      from    '../components/Footer/Footer';

export default function Home () {
    return (
        <>
            <Car />
            <About />
            <Card />
            <Menu />
            <SocialIcon />
            <Gallery/>   
            <Footer /> 
        </>
    );
}