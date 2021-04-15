import   React  from    'react'
import                  "./Card.css"
import ndaya from "./images/ndaya.jpg";
import sharon from "./images/sharon.jpg"
import mbuyi from "./images/mbuyi.jpg"

function Card() {
    return (
        
    <div className="container  ">
        
        <h3 className="text-center pt-5"> OUR MASTER CHEFS</h3>
        <div className="row padding card-img-space">
            <div className="col-md-3">
                <div className="card card-img-media">
                        <img src={sharon} alt="" className="card-img-top img-responsive" />
                    <div className="card-body">
                        <h5 className="card-title text-cent">Chef Siki</h5>
                        <p className="card-text text-cent ">HOT KITCHEN </p>
                    </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card card-img-media mt-3">
                    <img src={ndaya} alt="" className="card-img-top img-responsive" />
            
                    <div className="card-body">
                        <h5 className="card-title text-cent">Chef Ruth</h5>
                        <p className="card-text text-cent">OWNER & MANAGER</p>

                    </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card card-img-media mt-3">
                    <img src={mbuyi} alt="" className="card-img-top img-responsive" /> 
                    <div className="card-body">
                        <h5 className="card-title text-cent">Chef Flora</h5>
                        <p className="card-text text-cent">PASTRY KITCHEN</p>
                    </div>
                </div>
            </div>
            
            
            <div className="col-md-3">
                <div className="card card-img-media mt-3">
                    <img src={ndaya} alt="" className="card-img-top img-responsive" /> 
                    <div className="card-body">
                        <h5 className="card-title text-cent">Chef Flora</h5>
                        <p className="card-text text-cent">PASTRY KITCHEN</p>
                    </div>
                </div>
            </div>
  }

            
            
        </div>
    </div>

    )
}

export default Card
