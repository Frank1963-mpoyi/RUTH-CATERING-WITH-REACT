import React from 'react'
import mylogo from "../images/chef.jpg";



function Card() {
    return (
        
    <div className="container-fluid padding p-5">
        <h3 className="text-center">MEET OUR CHEFS</h3>
        <div className="row padding mt-3">
            <div className="col-md-4">
                <div className="card">
                        <img src={mylogo} alt="" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title text-center">Chef Siki</h5>
                        <p className="card-text text-center text-center">HOT KITCHEN </p>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card">
                    <img src={mylogo} alt="" className="card-img-top" />
            
                    <div className="card-body">
                        <h5 className="card-title text-center">Chef Ruth</h5>
                        <p className="card-text text-center">OWNER & MANAGER</p>

                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card">
                    <img src={mylogo} alt="" className="card-img-top" /> 
                    <div className="card-body">
                        <h5 className="card-title text-center">Chef Flora</h5>
                        <p className="card-text text-center">PASTRY KITCHEN</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default Card
