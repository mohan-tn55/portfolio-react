import React, { useRef, useState } from 'react';
import './Navbar.css';

// Import local images
import logo from '../../assets/logo.png';
import nav_underline from '../../assets/nav_underline.jpg';
import menu_open from '../../assets/menu_open.jpg';
import menu_close from '../../assets/menu_close.jpg';

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

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "0";
    }
  };
  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "-350px";
    }
  };

  return (
    <div className='navbar'>
      {/* Use imported image variables */}
      <img src={logo} alt="Logo" />
      <img src={menu_open} onClick={openMenu} alt="Open Menu" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="Close Menu" className='nav-mob-close' />
        <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src={nav_underline} alt="underline" /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About Me</p></AnchorLink>{menu === "about" ? <img src={nav_underline} alt="underline" /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={() => setMenu("projects")}>Projects</p></AnchorLink>{menu === "projects" ? <img src={nav_underline} alt="underline" /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => setMenu("work")}>My work</p></AnchorLink>{menu === "work" ? <img src={nav_underline} alt="underline" /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src={nav_underline} alt="underline" /> : <></>}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect Me</AnchorLink></div>
    </div>
  );
};

export default Navbar;