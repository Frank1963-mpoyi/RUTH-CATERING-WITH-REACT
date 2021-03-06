import      React   from    'react'
import                      "./Car.css";
import      Typed   from    "react-typed";
import      {Link}  from    'react-router-dom'




function Car() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-interval="13000" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner ">
            <div className="carousel-item active  ">
                <div className="info">
                <Typed 
                    className="typed-text"
                    strings={["FOR YOUR WEDDING", "FOR YOUR ANNIVERSARY", "FOR YOUR CONFERENCES", "ANY EVENT"]}
                    typeSpeed={70}
                    backSpeed={80}
                    loop
                />

                <Link to='/home-book-now'  className="btn-main-offer">book our services</Link>
                </div>
            </div>
            <div className="carousel-item ">
                <div className="info">
                
                <Typed 
                    className="typed-text"
                    strings={["FOR YOUR WEDDING", "FOR YOUR ANNIVERSARY", "FOR YOUR CONFERENCES", "ANY EVENT"]}
                    typeSpeed={70}
                    backSpeed={80}
                    loop
                />

                <Link to='/booknow'  className="btn-main-offer">book our services</Link>                    
                </div>
                
            </div>
            <div className="carousel-item">
                <div className="info">
                
                <Typed 
                    className="typed-text"
                    strings={["FOR YOUR WEDDING", "FOR YOUR ANNIVERSARY", "FOR YOUR CONFERENCES", "ANY EVENT"]}
                    typeSpeed={70}
                    backSpeed={80}
                    loop
                />

                <Link to='/booknow'   className="btn-main-offer">book our services</Link>
                    
                </div>
                
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
    

    )
}

export default Car;
