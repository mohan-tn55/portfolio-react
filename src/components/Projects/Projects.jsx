import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div id='projects' className='projects'>
      <div className="projects-title">
        <h1>Projects</h1>
      </div>
      <div className="projects-container">
        <div className="projects-format">
          <h3>01</h3>
          <h2>E-COMMERCE</h2>
          <p>My e-commerce web portfolio project showcases a fully responsive front-end built with HTML, CSS, and JavaScript. It features dynamic product listings, an interactive shopping...</p>
          <div className="projects-readmore">
            Read More <span className="material-symbols-outlined">east</span>
          </div>
        </div>
        <div className="projects-format">
          <h3>02</h3>
          <h2>Blog App-React</h2>
          <p>My blog application portfolio project is a responsive front-end built with React, leveraging HTML, CSS, and JavaScript for its structure and interactivity...</p>
          <div className="projects-readmore">
            Read More <span className="material-symbols-outlined">east</span>
          </div>
        </div>
        <div className="projects-format">
          <h3>03</h3>
          <h2>My Portfolio-Vite</h2>
          <p>My personal portfolio website is a dynamic and responsive Single Page Application (SPA) developed with React and bundled efficiently using Vite. Built with HTML, CSS,...</p>
          <div className="projects-readmore">
            Read More <span className="material-symbols-outlined">east</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;