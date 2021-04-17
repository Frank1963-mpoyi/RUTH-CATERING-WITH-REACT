import  React   from    'react'
import  mylogo  from    "./images/ruth.jpg";
import                  "./About.css"
// import   classes   from  "./About.css"







function About() {
    return (
        
    <div className="container main-container">
        <div className="row main-read">
            <div className="col col-lg-6 col-sm-12  main-read-my-history">
                <div className="read-my-history">
                    <h3 className="read-title">about Chef Ruth </h3>
        
                    <p>
                        Chef Ruth grew up in Democratic Republic of Congo and first realised
                        her passion for cooking while helping her mother and cousin prepare
                        family recipes that had been passed down for generations.
                        <br />
                        <br />
                        her eduction started in her mother's kitchen, expended into kitchen
                        and culinary schools in the South Africa and still continues every day
                        in Restaurant and Hotels , Barista Boys, CTICC, Table Bay Hotel, Raddison Blue,
                        and The President Hotel.
                        <br/>
                        <br />
                        We specializes with events cater in cape town. whether its a birthday
                        party, family gatherings, a private celebration , elaborate wedding or
                        any occasion that you like us to assist with
                        <br/>
                        <br />
                        Chef Ruth can't wait to share her fresh , vibrant flavors with you at your
                        next party, family gathering or any other special event
                    </p>
                
                    
                    
                </div>

            </div> 
            
            <div className="col-xs-12 col-md-6 col-lg-6 col-sm-12 main-mylogo">
                <div  className="mylogo">
                    <img src={mylogo} className="images"  alt="" />
                </div>
                    
            </div>
            
            
            
        </div>
    </div>
    )
}

export default About
