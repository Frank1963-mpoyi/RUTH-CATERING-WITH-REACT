import React from 'react'
import "./Menu.css";



function Menu() {
    return (

    <section id="about" className="menu">
        <div>
            <h2 style={{fontSize:"35px" , marginTop:"50px"}} className="title-text2 text-center "> OUR MENU</h2>
        </div>
        <div className="about-center container-fluid">
            
            <article className="about">
                <div className="about-icon">
                    <i className="fas fa-mug-hot"></i>
                </div>

                <div className="about-text">
                    <h2 className="about-subtitle">Drinks</h2>
                    <p className="about-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, officiis!
                    </p>
                </div>
            </article>
            


        
            <article className="about">
                <div className="about-icon">
                    <i className="fas fa-utensils"></i>
                </div>

                <div className="about-text">
                    <h2 className="about-subtitle">Healthy Food</h2>
                    <p className="about-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, voluptate.
                    </p>
                </div>
            </article>
        

        
            <article className="about">
                <div className="about-icon">
                    <i className="fas fa-mortar-pestle"></i>
                </div>

                <div className="about-text">
                    <h2 className="about-subtitle">Organic Food</h2>
                    <p className="about-info">chichen &nbsp; &nbsp; &nbsp; R 20 <br/>rice R 40 </p>
                </div>
            </article>
        

            
            <article className="about">
                <div className="about-icon">
                    <i className="fas fa-drumstick-bite"></i>
                </div>

                <div className="about-text">
                    <h2 className="about-subtitle">White Meat</h2>
                    <p className="about-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, corrupti.
                    </p>
                </div>
            </article>
        

        
            <article className="about">
                <div className="about-icon">
                    <i className="fas fa-fish"></i>
                </div>

                <div className="about-text">
                    <h2 className="about-subtitle">Sea Food</h2>
                    <p className="about-info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, amet?
                    </p>
                </div>
            </article>
            

        
            <article className="about">
                <div className="about-icon">
                    <i className="fas fa-pepper-hot"></i>
                </div>

                <div className="about-text">
                    <h2 className="about-subtitle">Hot & spicy</h2>
                    <p className="about-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
                        reprehenderit.
                    </p>
                </div>
            </article>
        
        </div>
    </section>
    )
}

export default Menu
