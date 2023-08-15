import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tihn0cs', 'template_uawwr72', form.current, 'XKyPTm51MwjRk9ql1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
          <HiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>abhijeetrane121@gmail.com</h5>
            <a href="mailto:abhijeetrane121@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact_option">
          <ImWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 7738975731</h5>
            <a href="https://api.whatsapp.com/send?phone=+917738975731" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact