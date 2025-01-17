import React from 'react'
import './Footer.css'
import Footer_logo from '../../assets/mainlogo1.svg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
<div className="footer-top">
    <div className="footer-top-left">
        <img src={Footer_logo} alt="" srcset="" />
        <p>Passionate about web technologies, I strive to create seamless user experiences. Constantly learning and innovating, I stay updated with the latest frontend trends.</p>
    
    </div>
    <div className="footer-top-right">
        <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
        </div>
        <div className="footer-subscribe">subscribe</div>
    </div>
</div>
<hr/>
<div className="footer-bootom">
    <div className="footer-bootom-left"><p>© 2025 Supresh Chalise. All rights reserved.</p>
    </div>
    <div className="footer-bootom-right">
<p>Term of services</p>
<p>Privacy Policy</p>
<p>Connect with me</p>
    </div>
</div>
    </div>
  )
}

export default Footer