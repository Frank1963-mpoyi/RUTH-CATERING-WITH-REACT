import          React       from    'react'
import                              "./ContactUs.css"




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
                            <i className="fa fa-envelope"></i><span className="form-info">ruthmpoyi63@gmail.com</span><br/><br/>
                        </div>
            
                         {/* Second grid   */}
                        <div>
                        <form id="my-form" action="https://formspree.io/f/mbjqlkjr" method="POST">
                                <input type="text" placeholder="First Name"  name="firstName" required/>
                                <input type="text" placeholder="Last Name" name="lastName" required/>
                                <input type="Email" placeholder="Email" name="email" required/>
                                <input type="text" placeholder="Subject of this message" name="message" required/>
                                <textarea nameName="message" id="" placeholder="Message" name="messages" rows="5" required></textarea>
                                <button type="submit" id="my-form-button" className="submit">Send Message</button>

                            </form>
                            <p id="my-form-status"></p>
                        </div>
                    </div>
                
                </div>

            </section>
           

            

    )
}

export default ContactUsForm
