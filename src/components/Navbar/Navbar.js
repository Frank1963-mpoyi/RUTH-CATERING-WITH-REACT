import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'




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
                    
                    <Link to='/'  className="nav-link" style={{color:"#df8a1b", fontWeight:"bolder"}} >Home </Link>
                </li>

                <li className="nav-item">
                    <Link to='/home-about-us'  className="nav-link"  >About</Link>                  
                </li>
        
                <li className="nav-item">
                    <Link to='/home-service'  className="nav-link" >service</Link>
                </li>
                <li className="nav-item">
                    <Link to='/home-contact-us'  className="nav-link ">Contact-us</Link>
                </li>
            </ul>
        </div>

    </div>
    

</nav>



    )
}

export default Navbar;
