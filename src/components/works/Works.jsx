import React from 'react'
import './works.css';
import Work1 from "../../assets/gp.jpg";
import Work2 from "../../assets/p1.png";
const Works = () => {
    return (
        <div name="works" className="works_container">
            <div style={{marginBottom:"2rem"}} className="title">My Work</div>
            <div className='work_card_container'>
                <div className="work_card">
                    <img className="work_image" src={Work1} alt="" />
                    <div className="work_data">
                    <div className='subtitle'>Graphical Password</div>
                    <button>Code</button>
                    <button>Demo</button>
                    </div>
                </div>
                <div className="work_card">
                    <img className="work_image" src={Work2} alt="" />
                    <div className="work_data">
                    <div className='subtitle'>Portfolio Website</div>
                    <button>Code</button>
                    <button>Demo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works