import React from 'react'
//import mylogo from "./images/mpoyi.jpg";

import { Link} from 'react-router-dom';



function Navbar() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top ">

    <div className="container">
        <a className="navbar-brand " href="#Home">ruth catering</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            
            <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav ml-auto">
                <li className="nav-item ">
                    
                    <a className="nav-link" href="#Home">Home </a>
                </li>

                    <li className="nav-item">
                        <Link to="/about/" className="nav-link"  >About</Link>                  
                    </li>
            
                <li className="nav-item">
                    <Link to="/service/" className="nav-link" >service</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact/" className="nav-link ">Contact-us</Link>
                </li>
            </ul>
        </div>

    </div>
    

</nav>

    

    )
}

export default Navbar;
