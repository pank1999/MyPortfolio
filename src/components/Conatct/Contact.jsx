import { useRef } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';
import {LocalPhone, Email,Home } from "@mui/icons-material";



export default function Contact() {
    const formref=useRef();
    const handleSubmit=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_lgvq1mc', 'template_7mv5r8a', formref.current, 'L6sJHNG-bQ42RAyxm')
            .then((result) => {
             console.log(result.text);
              }, (error) => {
               console.log(error.text);
             });
    };
  return (
    <div className="contact">
        <div className="c-bg"></div>
        <div className="c-wrapper">
             <div className="c-left">
                <h1 className="c-title">Let's discuss your projects</h1>
                <div className="c-info">
                    <div className="c-info-item">
                    <LocalPhone/> <span >+91 8630211986</span>
                    </div>
                    <div className="c-info-item">
                     <Email />   <span >pankajneeraj541@gmail.com</span>
                    </div>
                    <div className="c-info-item">
                    <Home/> <span >Gram Dhankher Khurd Post Mudha Satna M.P</span>
                    </div>
                </div>
             </div>
             <div className="c-right">
                <div className="c-desc">
                    <b>Whats your story ?</b> Get in touch , always support freelancer if the right project comes along. Keep working for better future.
                </div>
                <form ref={formref} onSubmit={handleSubmit}>
                    <input  name="user_name" placeholder="Name" type="text" />
                    <input  name="user_subject" placeholder="Subject" type="text" />
                    <input  name="user_email" placeholder="Email" type="email" />
                    <textarea rows={5} placeholder="Message" name="message" />
                    <button type="submit" value="Send">Submit</button>
                </form>
             </div>
        </div>
    </div>
  )
}
