import React from 'react'
import './education.css';
import SimpleLineIcon from 'react-simple-line-icons';
const Education = () => {
  return (
    <div name="education" className="education_container">
      <div style={{marginBottom:"2rem"}} className="title">Education and Experience</div>
      <div className='education_data'>
        <div className="education_card">
          <div className="timeline">
            <div className="timeline_icon">
              <SimpleLineIcon style={{ fontSize: "35px", color: "red" }} name="graduation" />
            </div>
            <div className="timeline_data">
              <div className='subtitle'>AG Patil Institute of Technology</div>
              <div>2018-2021</div>
              <div>Computer Engineering</div>
              <div>CGPA: 8.55</div>
            </div>
          </div>
          <div className="timeline">
            <div className="timeline_icon">
              <SimpleLineIcon style={{ fontSize: "35px", color: "red" }} name="graduation" />
            </div>
            <div className="timeline_data">
              <div className='subtitle'>Government Polytechnic</div>
              <div>2014-2017</div>
              <div>Computer Technology</div>
              <div>Percentage: 75.47%</div>
            </div>
          </div>
          <div className="timeline">
            <div className="timeline_icon">
              <SimpleLineIcon style={{ fontSize: "35px", color: "red" }} name="graduation" />
            </div>
            <div className="timeline_data">
              <div className='subtitle'>SVCS High School</div>
              <div>2013-2014</div>
              <div>General Studies</div>
              <div>Percentage: 85.80%</div>
            </div>
          </div>
        </div>
        <div className="education_card">
          <div className="timeline">
            <div className="timeline_icon">
              <SimpleLineIcon style={{ fontSize: "35px", color: "red" }} name="graduation" />
            </div>
            <div className="timeline_data">
              <div className='subtitle'>Allianz Technology</div>
              <div>02/2022-07/2022</div>
              <div>Thunderhead Developer</div>
              <div>Thunderhead Developer is document preparation tool</div>
            </div>
          </div>
          <div className="timeline">
            <div className="timeline_icon">
              <SimpleLineIcon style={{ fontSize: "35px", color: "red" }} name="graduation" />
            </div>
            <div className="timeline_data">
              <div className='subtitle'>Front End Web Developer</div>
              <div>Present</div>
              <div>HTML CSS JAVASCRIPT REACTJS</div>
              <div>Looking For Front End Web Developer Job</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education