import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/supresh.svg'
function About() {
  return (
    <div id='about1'className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" srcset="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>With a strong passion for UI/UX and React.js, I focus on crafting intuitive, visually appealing, and user-friendly web applications. </p>
                    <p>  I constantly seek new challenges to refine my design and development skills while staying updated with the latest industry trends. My goal is to create seamless digital experiences and continuously evolve as a developer in the ever-changing tech landscape.</p>

                </div>
                <div className="about-skills">
                    <div className="about-skill"> <p>HTML & CSS</p><hr style={{width :'50%'}}/></div>
                    <div className="about-skill"> <p>REACT JS</p><hr style={{width :'20%'}}/></div>
                    <div className="about-skill"> <p>PHP</p><hr style={{width :'40%'}}/></div>
                    <div className="about-skill"> <p>JAVASCRIPT</p><hr style={{width :'50%'}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achivements">
            <div className="about-achivement">
                <h1>0</h1>
                <p>NO EXPERIENCES</p>
            </div>
            <hr/>
            <div className="about-achivement">
                <h1>10+</h1>
                <p>PROJECT COMPLETED</p>
            </div>
            <hr/>
            
        </div>
    </div>
  )
}

export default About