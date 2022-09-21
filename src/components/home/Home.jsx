import React from 'react'
import './home.css';
import Me from "../../assets/avatar-1.svg";
import { AiFillLinkedin,AiFillGithub } from "react-icons/ai";
import { Link } from "react-scroll";

const Home = () => {
  const iconSize=30;
  return (
    <div name="home" className="home_container">
            <img src={Me} alt="" />
        <div className='title'>Rajesh Charhajari</div>
        <p>I Am Front End Developer</p>
        <div>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rajesh-charhajari-91a831105/"><AiFillLinkedin size={iconSize}/></a>
            <a target="_blank" rel="noreferrer" href="https://github.com/rajeshrc12"><AiFillGithub size={iconSize}/></a>
        </div>
        <Link to="contact" className='icon' smooth={true} duration={1500}>
        <button className='btn'>Hire Me</button>
        </Link>
        
    </div>
  )
}

export default Home