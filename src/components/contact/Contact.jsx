import React from 'react'
import './contact.css';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
const contact = () => {
    const sendEmail = (e) =>{
        e.preventDefault();
        Swal.fire({
          title: 'Submitting form'
        });
        Swal.showLoading();
          emailjs.sendForm("rajeshrc12", "template_hrez2wm", e.target, 'nWHe7LE5YQHkkdB12')
          .then((result) => {
            Swal.close();
            Swal.fire({
              icon: 'success',
              title: 'Form Submitted',
              text: 'I will get back to you soon'
            })
          }, (error) => {
            Swal.fire({
              icon: 'error',
              title: 'Form Not Submitted',
              text: 'Sorry For that'
            })
          });
          e.target.reset();
      }
    return (
        <div name="contact" className="contact_container">
            <div className="title">Get In Touch</div>
            <form onSubmit={sendEmail} className="contact_form">
                <div className="contact_form_text">
                    <div className="subtitle">Let's talk about everything!</div>
                    Don't like forms? Send me an email. rajesh.charhajari@gmail.com 👋
                </div>
                <div className="contact_input_field">
                    <input pattern='^[^\s]+[-a-zA-Z\s]+([-a-zA-Z]+)*$' name="from_name" type="text" placeholder='name' required/>
                    <input pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" name="email" type="text" placeholder='Email' required/>
                    <textarea name="message" rows="10" placeholder='Message'required></textarea>
                    <button>send message</button>
                </div>
            </form>
        </div>
    )
}

export default contact