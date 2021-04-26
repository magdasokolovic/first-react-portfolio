import React from "react";
import './Contact.scss'

export default function Contact() {
    return (
        <div className='container'>
            <div className='wrapper'>
                <p>Feel free to reach me anytime.</p>
                      

                <form className="contact-form" method="post" action="">

                    <input name="name" type="text" className="form-control" placeholder="Your Name" required />

                    <input name="email" type="email" className="form-control" placeholder="Your Email" required />

                    <textarea name="message" className="form-control" placeholder="Message" rows="4" required></textarea>

                    <input type="submit" className="form-control submit" value="SEND MESSAGE" />

                </form>

          
            </div>
        </div>
    )
    
    
  }