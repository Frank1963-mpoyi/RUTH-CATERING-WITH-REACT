import React from 'react'
import {Link} from 'react-router-dom'
import './components/Navbar/Navbar.css'




function Navbar() {
    return (
    
    <nav className="navbar navbar-expand-lg  navbar-light fixed-top ">

    <div className="container">
        <Link to='/'  className="navbar-brand text-white" >ruth catering</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            
            <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav ml-auto">
                <li className="nav-item ">
                    
                    <Link to='/'  className="nav-link" >Home </Link>
                </li>

                <li className="nav-item">
                    <Link to='/about-us'  className="nav-link"  >About</Link>                  
                </li>
        
                <li className="nav-item">
                    <Link to='/services'  className="nav-link" >service</Link>
                </li>
                <li className="nav-item">
                    <Link to='/contact-us'  className="nav-link ">Contact-us</Link>
                </li>
            </ul>
        </div>

    </div>
    

</nav>



    )
}

export default Navbar;
