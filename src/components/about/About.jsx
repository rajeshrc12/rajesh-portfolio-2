import React from 'react'
import './about.css';
import Image from "../../assets/avatar-2.svg";
import ProgressBar from "@ramonak/react-progress-bar";
import Resume from "../../assets/resume.pdf";
const about = () => {
    return (
        <div name="about" className="about_container">
            <div style={{marginBottom:"2rem"}} className="title">About Me</div>
            <div className="about_container_data">
            <img src={Image} alt="" />
            <div className="about_card">
                <div className="about_text">
                    I am Rajesh Charhajari, Web Developer From Solapur. I Have Experience of Front End Development Please See My Work.
                    <div className='about_btn'><a target="_blank" rel="noreferrer" className='social_link' href={Resume} download="rajesh_charhajari_resume.pdf"> <button>Download CV</button></a></div>
                    
                </div>
                <div className="about_skills">
                    <div className="skill">
                        <div className="skill_subtitle subtitle">
                            HTML
                        </div>
                        <div className="skill_bar">
                        <ProgressBar completed={80} height="15px"/>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill_subtitle subtitle">
                            CSS
                        </div>
                        <div className="skill_bar">
                        <ProgressBar completed={70} bgColor="green" height="15px"/>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill_subtitle subtitle">
                            Javascript
                        </div>
                        <div className="skill_bar">
                        <ProgressBar completed={80} bgColor="blue" height="15px"/>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill_subtitle subtitle">
                            ReactJS
                        </div>
                        <div className="skill_bar">
                        <ProgressBar completed={60} bgColor="pink" height="15px"/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default about