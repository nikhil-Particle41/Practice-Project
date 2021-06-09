import React , { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import ContactMap from '../ContactMap/ContactMap';

const Contact = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="contact">
            <ContactMap /> 
            <div className="container">
              
            <div className="mb-4 ">
            <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
            <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                a matter of hours to help you.</p>
            </div>    
            
               <div className="row conatct-form">
                <div className="col-md-9 mb-md-0 mb-5">
                    <form action="#">
                        <label for="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                        <label for="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                        <label for="country">Country</label>
                        <select id="country" name="country">
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                        </select>
                        
                        <label for="DOB">Date Of Birth </label>
                        <br />
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                        <br />
                        
                        <label for="subject">Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>

                        <input type="submit" value="Submit" />
                    </form>
                </div>
               </div>
               
            </div>
        </div>
        
    );
}

export default Contact;