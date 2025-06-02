import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <div className='footer' >
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt="" />
                <p>I'm frontend developer from, Coimbatore, Tamil Nadu.</p>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-ieft">ⓒ 2025 Mohan V. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of services</p>
                <p>Privacy Policy</p>
                <p>Contact with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer