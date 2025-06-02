import "./Hero.css"
import profile_img from "../../assets/profile.jpg"
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div className="hero">
        <img src={profile_img} alt="" />
        <h1>Mohan V | Front-End Developer</h1>
        <p>Front-end development with a focus on usability and performance.
Transforming ideas into interactive web applications. Crafting clean, responsive, and user-centric web interfaces.
Focused on performance, accessibility, and modern design.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect me</AnchorLink></div>
            <div className="hero-resume">
                My Resume
            </div>
        </div>
    </div>
  )
}

export default Hero