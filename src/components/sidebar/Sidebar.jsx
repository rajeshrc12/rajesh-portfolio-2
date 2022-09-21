import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import SimpleLineIcon from 'react-simple-line-icons';
import { Link } from "react-scroll";
import './sidebar.css';
const Sidebar = () => {
  const iconSize = 40;
  const [mobileMenu, setMobileMenu] = useState(true);
  return (

    <div className={mobileMenu ? "sidebar_container open_sidebar" : "sidebar_container"}>
      <div className="sidebar_items">
        <Link to="home" className='icon' smooth={true} duration={1500}>
          <SimpleLineIcon onClick={() => { setMobileMenu(!mobileMenu) }} style={{ fontSize: "35px" }} name="home" size="Large" />
        </Link>
        <Link to="about" className='icon' smooth={true} duration={1500}>
          <SimpleLineIcon onClick={() => { setMobileMenu(!mobileMenu) }} style={{ fontSize: "35px" }} name="user-following" size="Large" />
        </Link>
        <Link to="education" className='icon' smooth={true} duration={1500}>
          <SimpleLineIcon onClick={() => { setMobileMenu(!mobileMenu) }} style={{ fontSize: "35px" }} name="graduation" size="Large" />
        </Link>
        <Link to="works" className='icon' smooth={true} duration={1500}>
          <SimpleLineIcon onClick={() => { setMobileMenu(!mobileMenu) }} style={{ fontSize: "35px" }} name="note" size="Large" />
        </Link>
        <Link to="contact" className='icon' smooth={true} duration={1500}>
          <SimpleLineIcon onClick={() => { setMobileMenu(!mobileMenu) }} style={{ fontSize: "35px" }} name="bubble" size="Large" />
        </Link>
      </div>
      <AiOutlineMenu style={{color:"black",cursor:"pointer"}} className="sidebar_btn" onClick={() => { setMobileMenu(!mobileMenu) }} size={iconSize} />

      
    </div>
  )
}

export default Sidebar