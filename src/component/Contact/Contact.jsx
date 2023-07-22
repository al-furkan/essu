import React from 'react'
import './Contact.css'
import {TfiEmail} from 'react-icons/tfi'
import {BiMessageRoundedDots} from 'react-icons/bi';
import {RiWhatsappFill} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact=() =>{
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ut6v6vd', 'template_1jfz1ab', form.current, '7tOZd5PIiYcXt5pPa')
      e.targer.reset();
  };


  return (
    <section id='contact'>
    <h5>get in touch</h5>
    <h2>Contact me</h2>
    <div className="container contact_container">
     <div className="contact_options">
      <article className='contact_option'>
         <TfiEmail className='icon'/>
        <h4>Email</h4>
        <h5>mdalfurkan71@gmail.com</h5>
        <a href="mdalgfurkan71@gmail.com">Send a message </a>

      </article>
      <article className='contact_option'>
         <BiMessageRoundedDots  className='icon'/>
        <h4>Messanger</h4>
        <h5>Md al Furkan</h5>
        <a href="masanger.com">Send a message </a>
      </article>
      <article className='contact_option'>
         <RiWhatsappFill  className='icon'/>
        <h4>WhatApp</h4>
        <h5>md al furkan</h5>
        <a href="Whatapp.com">Send a message </a>
      </article>
     </div>
     <form ref={form} onSubmit={sendEmail} >
         <input type="text"name='name'placeholder='Your FullName' required />
         <input type="text" name="email" placeholder='Your email' required />
         <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
         <button type='submit' className='btn'>Send Message</button>
     </form>
    </div>
    </section>
  )
}

export default Contact
