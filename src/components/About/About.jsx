import React from 'react';
import './About.css';

// Import local image
import profile_img from '../../assets/profile_2.jpg'; // Assuming 'profile_2.jpg' is the about section image

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          {/* Use imported image variable */}
          <img src={profile_img} alt="Profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am Mohan V, a passionate Frontend Developer skilled in creating responsive and user-friendly web interfaces. As a fresher, I bring strong enthusiasm to learn and build impactful digital experiences using modern web technologies.</p>
            <p>Motivated fresher with a strong foundation in frontend development and modern web technologies.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{ width: "65%" }} /></div>
            <div className="about-skill"><p>React JS</p><hr style={{ width: "68%" }} /></div>
            <div className="about-skill"><p>Bootstrap</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>Material UI</p><hr style={{ width: "63%" }} /></div>
            <div className="about-skill"><p>Git & GitHub</p><hr style={{ width: "69%" }} /></div>
            <div className="about-skill"><p>Vite</p><hr style={{ width: "65%" }} /></div>
            <div className="about-skill"><p>Redux</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>Media Queries</p><hr style={{ width: "63%" }} /></div>
            <div className="about-skill"><p>TypeScript</p><hr style={{ width: "70%" }} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>0 - 1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  );
};

export default About;