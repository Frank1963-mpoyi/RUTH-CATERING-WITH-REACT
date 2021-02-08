import React from 'react'
import mylogo from "../images/foodcover.jpg";

function About() {
    return (
        
    <div className="container mt-5">
    <h3 className="text-center">READ MY HISTORY</h3>
    <div className="row mt-5">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  ">
            
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
        
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  ">
                <img src={mylogo} style={{width: "100%", height: "auto"}} alt="" />
        </div>
        
        
        
    </div>
</div>
    )
}

export default About
