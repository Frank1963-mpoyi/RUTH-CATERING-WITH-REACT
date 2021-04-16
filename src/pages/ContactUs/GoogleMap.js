import React from 'react'
import './ContactUs.css'




function GoogleMap() {
    return (

        <div>
            <div className="map mt-5">
                <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d847627.2471124856!2d18.095609696971266!3d-33.91426882093706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc500f8826eed7%3A0x687fe1fc2828aa87!2sKaapstad!5e0!3m2!1saf!2sza!4v1611234429068!5m2!1saf!2sza"  frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"' style={{width:"100%", height:"40vh"}}></iframe>
            </div>
            
        </div>
    
    )
}

export default GoogleMap
