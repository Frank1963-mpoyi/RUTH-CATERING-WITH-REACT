import   React  from    'react'
import                  "./Card.css"
import ndaya from "./images/ndaya.jpg";
import siki from "./images/siki.JPG"
import mbuyi from "./images/mbuyi.jpg"
import flora from "./images/Flora.jpg"

function Card() {
    return ( 

            <div className="team">
                <div className="container">
                    <h1>Our Master Chefs</h1>
                    <div className="row">
                        <div className="col-md-3 profile text-center">
                            <div className="img-box">
                                <img src={ndaya} className="img-responsive" alt=""/>
                                <ul>
                                    <li><a href=""> <i className="fa fa-facebook"></i></a> </li>
                                    <li><a href=""> <i className="fa fa-twitter"></i></a> </li>
                                    <li><a href=""> <i className="fa fa-linkedin"></i></a> </li>

                                </ul>
                            </div>
                            <h2>Chef Ruth</h2>
                            <h3>Founder/CEO</h3>
                            {/* <p>Lorem ipsum dolor sit amet.</p> */}
                        </div>

                        <div className="col-md-3 profile text-center">
                            <div className="img-box">
                                <img src={siki} className="img-responsive" alt=""/>
                                <ul>
                                    <li><a href=""> <i className="fa fa-facebook"></i></a> </li>
                                    <li><a href=""> <i className="fa fa-twitter"></i></a> </li>
                                    <li><a href=""> <i className="fa fa-linkedin"></i></a> </li>

                                </ul>
                            </div>
                            <h2>Chef Siki</h2>
                            <h3> Hot Kitchen </h3>
                            {/* <p>Lorem ipsum dolor sit amet.</p> */}
                        </div>

                        <div className="col-md-3 profile text-center">
                            <div className="img-box">
                                <img src={flora} className="img-responsive" alt=""/>
                                <ul>
                                    <li><a href=""> <i className="fa fa-facebook"></i></a> </li>
                                    <li><a href=""> <i className="fa fa-twitter"></i></a> </li>
                                    <li><a href=""> <i className="fa fa-linkedin"></i></a> </li>

                                </ul>
                            </div>
                            <h2>Chef Flora</h2>
                            <h3>Pastry</h3>
                            {/* <p>Lorem ipsum dolor sit amet.</p> */}
                        </div>

                        <div className="col-md-3 profile text-center">
                            <div className="img-box">
                                <img src={mbuyi} className="img-responsive" alt=""/>
                                <ul>
                                    <li><a href=""> <i className="fa fa-facebook"></i></a> </li>
                                    <li><a href=""> <i className="fa fa-twitter"></i></a> </li>
                                    <li><a href=""> <i className="fa fa-linkedin"></i></a> </li>

                                </ul>
                            </div>
                                <h2>Chef Amanda</h2>
                                <h3>Breakfast Chef</h3>
                                {/* <p>Lorem ipsum dolor sit amet.</p> */}
                        </div>
                    </div>    
                </div>
            </div>

    )
}

export default Card
