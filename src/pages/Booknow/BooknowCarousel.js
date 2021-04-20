import React from 'react';
import "./Booknow.css"
import { useForm, ValidationError } from '@formspree/react';




function Booknow () {

const [state, handleSubmit] = useForm("mnqlnggp");
if (state.succeeded) {
    return  <Booknow/> //<p>Thanks for joining!</p>;
}
return (

            <section id="contact-section"  >
                <div className="container-fluid">
                    <h2>Book Our Services</h2>
                    <p>Email us and keep up to date with our latest news </p>
                    <div className="contact-form">

                        
                        <div>
                            <i className="fa fa-map-marker"></i><span className="form-info"> Brackenfell Cape Town South Africa </span><br/>
                            <i className="fa fa-phone"></i><span className="form-info">Phone: + (27) 736485511 </span><br/>
                            <i className="fa fa-envelope"></i><span className="form-info">ruthmpoyi63@gmail.com</span><br/><br/>
                        </div>
            
                        
                        <div>
                        <form id="my-form" onSubmit={handleSubmit}>
                                <input type="text" placeholder="First Name"  name="firstName" required/>
                                <ValidationError prefix="FirstName" field="firstName" errors={state.errors} />
                                <input type="text" placeholder="Last Name" name="lastName" required/>
                                <ValidationError prefix="LastName" field="lastName" errors={state.errors} />
                                <input type="Email" placeholder="Email" name="email" required/>
                                <ValidationError prefix="Email" field="email" errors={state.errors} />
                                <input type="text" placeholder="Subject of this message" name="message" required/>
                                <ValidationError prefix="Message" field="message" errors={state.errors} />
                                <textarea nameName="message" id="" placeholder="Message" name="messages" rows="5" required></textarea>
                                <ValidationError prefix="Messages" field="messages" errors={state.errors} />
                                <button type="submit" className="submit" disabled={state.submitting}> Send Message </button>

                            </form>
                            <p id="my-form-status"></p>
                            <p id="" className="success"></p>
                        </div>
                    </div>
                
                </div>

            </section>
    

);
}

function App() {
return (
    <Booknow/>
);
}

export default App;












// export default function Booknow () {
//     return (
                
//         <section id="contact-section"  >
//         <div className="container-fluid">
//             <h2>Book Our Services</h2>
//             <p>Email us and keep up to date with our latest news </p>
//             <div className="contact-form">

//                  {/* first grid section  */}
//                 <div>
//                     <i className="fa fa-map-marker"></i><span className="form-info"> Brackenfell Cape Town South Africa </span><br/>
//                     <i className="fa fa-phone"></i><span className="form-info">Phone: + (27) 736485511 </span><br/>
//                     <i className="fa fa-envelope"></i><span className="form-info">ruthmpoyi63@gmail.com</span><br/>
//                 </div>

//                  {/* Second grid   */}
//                 <div>
//                     <form action="">
//                         <input type="text" placeholder="First Name" required/>
//                         <input type="text" placeholder="Last Name" required/>
//                         <input type="Email" placeholder="Email" required/>
//                         <input type="text" placeholder="Subject of this message" required/>
//                         <textarea nameName="message" id="" placeholder="Message" rows="5" required></textarea>
//                         <button type="submit" className="submit">Send Message</button>
//                     </form>
//                 </div>
//             </div>
        
//         </div>
//     </section>
//     );
// }