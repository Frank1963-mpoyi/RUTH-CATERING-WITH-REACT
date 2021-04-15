import React from 'react';
import "./AboutUs.css"
import mylogo from "./images/ruh.jpg";



export default function AboutUs () {
    return (

            <div className="hero-container ">
                <img className="abous-us " src={mylogo} style={{width: "100%", height: "100vh", backgroundColor: "rgba(0,0,0,0)"}} alt="" />
                {/* <div class="overlay"></div> */}
                {/* <div className="await">
                    <h3>THIS PAGE IS  UNDER CONSTRUCTION</h3>
                    
                </div>  */}
                
        
            </div>
        
    );
}