import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import link_icon from '../../assets/link_icon.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import github1 from '../../assets/github1.svg'

function Contact() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "03c7f409-016c-40db-8d92-24a26f256889");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };
    

  return (
    <div id='contact'className='contact'>
<div className="contact-title">
    <h1>Get in Touch</h1>
    <img src={theme_pattern}alt="" srcset="" />
</div>
<div className="contact-section">
    <div className="contact-left">
        <h1>Let's talk</h1>
        <p>I'm currently available to take on new projects, so feel free to send me a mesage about anything that you want me to work. You can contact anytime</p>
    <div className="contact-details">
        <div className="contact-detail">
<img src={mail_icon} alt="" srcset="" /><p>supresh02@gmail.com</p>
        </div>
        <div className="contact-detail">
        <img src={call_icon} alt="" srcset="" /><p>+977-9860770023</p>
        </div>
        </div>
        <div className="contact-detail">
        <img src={location_icon} alt="" srcset="" /><p>Chapagoun,lalitpur Nepal </p>
        </div>
        <div className="image">
        <a href="https://www.linkedin.com/in/supresh-chalise-3b9a74280/" target="_blank" rel="noopener noreferrer"><img src={link_icon} alt="Clickable"  /></a>
 <a href="https://www.facebook.com/its.croc" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Clickable"  /></a>
 <a href="https://www.instagram.com/supresh_chalise/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Clickable"  /></a>       
 <a href="https://github.com/supreshchalise04" target="_blank" rel="noopener noreferrer"><img src={github1} alt="Clickable"  /></a>  
        </div>
        </div>
        <form onsubmit={onSubmit} className='contact-right'>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your Name' name='name'/>
            <label htmlFor="">Your Email</label>
            <input type="email"  placeholder='Enter your Email' name='email'/>
            <label htmlFor="">Write your message here</label>
            <textarea name="message"  rows="8" placeholder='Enter your message'></textarea>
            <button type='submit'className='contact-submit'>Submit now</button>
        </form>
    </div>
    </div>



  )
}

export default Contact