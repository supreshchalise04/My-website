import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile1.svg'
function Hero() {
  return (
    <div id='home' className='hero'> 
<img src={profile_img} alt=""  />
<h1><span>I'm Supresh Chalise ,</span> UI/UX & React.js Developer based in Nepal</h1>
<p>
With a strong passion for web technologies, I focus on learning and building seamless user experiences. Eager to grow and innovate, I stay updated with the latest trends in frontend development.</p>
<div className="hero-action">
    <div className="hero-connect">Connect with me </div>
    <div className="hero-resume">My resume</div>
</div>
    </div>
  )
}

export default Hero