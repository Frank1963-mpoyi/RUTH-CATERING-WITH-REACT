import React from 'react'
import     "./Menu.css";
import fruit1 from "./images/ruth (1).jpg";
import fruit2 from "./images/ruth (2).jpg"
import fruit3 from "./images/ruth (3).jpg"
import fruit4 from "./images/ruth (4).jpg"
import fruit5 from "./images/ruth (5).jpg"
import fruit6 from "./images/ruth (6).jpg"


function Menu() {
    return (
        <div className="wrapper" style={{marginTop:"120px"}}>
            <div className="title">
                <h4><span></span> Our Menu</h4>
            </div>

            <div className="menu">
                <div className="single-menu">
                    <img src={fruit1} alt=""/>
                    <div className="menu-content">
                        <h4>chicken fried salad <span>$45</span></h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

                <div className="single-menu">
                    <img src={fruit2}  alt=""/>
                    <div className="menu-content">
                        <h4>chicken fried salad <span>$45</span></h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

                <div className="single-menu">
                    <img src={fruit3}  alt=""/>
                    <div className="menu-content">
                        <h4>chicken fried salad <span>$45</span></h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

                <div className="single-menu">
                    <img src={fruit4}  alt=""/>
                    <div className="menu-content">
                        <h4>chicken fried salad <span>$45</span></h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

                <div className="single-menu">
                    <img src={fruit5}  alt=""/>
                    <div className="menu-content">
                        <h4>chicken fried salad <span>$45</span></h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

                <div className="single-menu">
                    <img src={fruit6}  alt=""/>
                    <div className="menu-content">
                        <h4>chicken fried salad <span>$45</span></h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

                
            </div>
        </div>







    );
}

export default Menu
