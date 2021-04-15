import          React       from    'react'
import                              "./ContactUs.css"




function ContactUsForm() {
    return (
        <div>
                    
            <section id="contact-section" >
                <div className="container-fluid">
                    <h2>Contact Us</h2>
                    <p>Email us and keep up to date with our latest news </p>
                    <div className="contact-form">

                         {/* first grid section  */}
                        <div>
                            <i className="fa fa-map-marker"></i><span className="form-info">28 Loubser street Brackenfell cape Town</span><br/>
                            <i className="fa fa-phone"></i><span className="form-info">Phone no +27781114041 </span><br/>
                            <i className="fa fa-envelope"></i><span className="form-info">frankmpoyi63@gmail.com</span><br/>
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
        </div>
    )
}

export default ContactUsForm
