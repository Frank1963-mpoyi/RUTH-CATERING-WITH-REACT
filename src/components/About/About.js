import React from 'react'
import mylogo from "./images/ruth.jpg";
import "./About.css"


function About() {
    return (
        
    <div className="container ">
       
        <div className="row main-read ">
            <div className="col col-lg-6 col-sm-12 read-my-history "> 
            <h3 className="read-title">READ MY HISTORY</h3>
                <p>
                    Chef Ruth grew up in Republic Democratic of Congo and first realised
                    her passion for cooking while helping her mother and cousin prepre
                    family recipes that had been passed down for generations.

                    her eduction started in her mother's kitchen, expended into kitchen
                    and culinary schools in the South Africa and still continues every day
                    in Restaurant and Hotels , Barista Boys, CTICC, Table Bay Hotel, Raddison Blue,
                    and The President Hotel.
                </p>
            
                
                <p>
                    We specializes with events cater in cape town. whether its a birthday
                    party, family gatherings, a private celebration , elaborate wedding or
                    any occasion that you like us to assist with
                </p>

                <p>
                    Chef Ruth can't wait to share his fresh , vibrant flavors with you at your
                    next party, family gathering or any other special event
                </p>
            </div> 
            
            <div className="col-xs-12 col-md-6 col-lg-6 col-sm-12 mylogo">
                    <img src={mylogo} className="images"  alt="" />
            </div>
            
            
            
        </div>
    </div>
    )
}

export default About
