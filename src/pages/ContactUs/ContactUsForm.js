import          React       from    'react'
import                              "./ContactUs.css"
import ruth from "./images/ruth (1).jpg"
// import  classes from './ContactUs.css'
import styled from 'styled-components'


const StyledBody = styled.body`
    
        font-family: sans-serif;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
    
`;



function ContactUsForm() {
    return (
        
                    
            <section id="contact-section"  >
                <div className="container-fluid">
                    <h2>Contact Us</h2>
                    <p>Email us and keep up to date with our latest news </p>
                    <div className="contact-form">

                         {/* first grid section  */}
                        <div>
                            <i className="fa fa-map-marker"></i><span className="form-info"> Brackenfell Cape Town South Africa </span><br/>
                            <i className="fa fa-phone"></i><span className="form-info">Phone: + (27) 736485511 </span><br/>
                            <i className="fa fa-envelope"></i><span className="form-info">ruthmpoyi63@gmail.com</span><br/>
                        </div>

                         {/* Second grid   */}
                        <div>
                            <form action="">
                                <input type="text" placeholder="First Name" required/>
                                <input type="text" placeholder="Last Name" required/>
                                <input type="Email" placeholder="Email" required/>
                                <input type="text" placeholder="Subject of this message" required/>
                                <textarea nameName="message" id="" placeholder="Message" rows="5" required></textarea>
                                <button type="submit" className="submit">Send Message</button>
                            </form>
                        </div>
                    </div>
                
                </div>
            </section>

            

    )
}

export default ContactUsForm
