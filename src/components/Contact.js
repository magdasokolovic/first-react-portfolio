import React from "react";
import './Contact.scss'
import Lottie from 'react-lottie';
import animationData from './lotties/contact-me.json';



export default function Contact() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
        <div className='container'>
            <div className='wrapper'>
                <p>Feel free to reach me anytime.</p>
                      
                <div className="flex-container">
                    <form className="contact-form" method="post" action="">

                        <input name="name" type="text" className="form-control" placeholder="Your Name" required />

                        <input name="email" type="email" className="form-control" placeholder="Your Email" required />

                        <textarea name="message" className="form-control" placeholder="Message" rows="4" required></textarea>

                        <input type="submit" className="form-control submit" value="SEND MESSAGE" />

                    </form>

                    <Lottie 
                        options={defaultOptions}
                        height={350}
                        width={500}
                    />
                </div>

          
            </div>
        </div>
    )
    
    
  }