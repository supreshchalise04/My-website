import React from 'react'
import './Hero.css'
import profile_img from '../../assets/Ellipse 1.png'

function Hero() {
  
  return (
    <div id='home' className='hero'> 
<img src={profile_img} alt=""  />
<h1><span>I'm Supresh Chalise ,</span> UI/UX & React.js Developer based in Nepal</h1>
<p>
With a strong passion for web technologies, I focus on learning and building seamless user experiences. Eager to grow and innovate, I stay updated with the latest trends in frontend development.</p>
<div className="hero-action">
    
    <div className="hero-resume">
      <a href="/Bit-Question-cv.pdf" download="Bit-Question-cv.pdf">
      Download resume
      </a>
    </div>
</div>
    </div>
  )
}

export default Hero