import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const form = useRef();

  const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k1vkv3c', 'template_wmqiqrp', form.current, 'L0O06r8yLXkVVYiYv')
      .then((result) => {
          console.log(result.text);
          setDone(true)
          toast.success()
      }, (error) => {
          console.log(error.text);
      });
  };
 
  return (
    <div className="contact-form" id="contact">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          <span >Get in Touch</span>    
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "thanks for contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
