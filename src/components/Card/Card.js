import React from 'react'
// import mylogo from "./images/ruth2.jpg";
import "./Card.css"



function Card() {
    return (
        
    <div className="container  ">
        <h3 className="text-center pt-5">MEET OUR CHEFS</h3>
        <div className="row padding mt-3">
            <div className="col-md-3">
                <div className="card">
                        <img src="" alt="" className="card-img-top img-fluid" />
                    <div className="card-body">
                        <h5 className="card-title text-cent">Chef Siki</h5>
                        <p className="card-text text-cent ">HOT KITCHEN </p>
                    </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card">
                    <img src="" alt="" className="card-img-top img-fluid" />
            
                    <div className="card-body">
                        <h5 className="card-title text-cent">Chef Ruth</h5>
                        <p className="card-text text-cent">OWNER & MANAGER</p>

                    </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card">
                    <img src="" alt="" className="card-img-top img-fluid" /> 
                    <div className="card-body">
                        <h5 className="card-title text-cent">Chef Flora</h5>
                        <p className="card-text text-cent">PASTRY KITCHEN</p>
                    </div>
                </div>
            </div>
            
            
            <div className="col-md-3">
                <div className="card">
                    <img src="" alt="" className="card-img-top img-fluid" /> 
                    <div className="card-body">
                        <h5 className="card-title text-cent">Chef Flora</h5>
                        <p className="card-text text-cent">PASTRY KITCHEN</p>
                    </div>
                </div>
            </div>


            
            
        </div>
    </div>

    )
}

export default Card
