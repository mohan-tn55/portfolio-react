import React from 'react';
import './Hero.css';

// Import local image
import profile_img from '../../assets/profile.jpg'; // Assuming 'profile.jpg' is the main hero image

// Simple AnchorLink component for smooth scrolling
const AnchorLink = ({ href, offset, className, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const topOffset = targetElement.getBoundingClientRect().top + window.pageYOffset - (offset || 0);
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };
  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

const Hero = () => {
  return (
    <div id='home' className="hero">
      {/* Use imported image variable */}
      <img src={profile_img} alt="Profile" />
      <h1>Mohan V | Front-End Developer</h1>
      <p>Front-end development with a focus on usability and performance. Transforming ideas into interactive web applications. Crafting clean, responsive, and user-centric web interfaces. Focused on performance, accessibility, and modern design.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect me</AnchorLink></div>
        <div className="hero-resume">
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;