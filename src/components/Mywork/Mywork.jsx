import React from 'react'
import "./Mywork.css"
import mywork1_img from "../../assets/mywork1.jpeg"
import mywork2_img from "../../assets/mywork2.jpeg"
import mywork3_img from "../../assets/mywork3.jpeg"
import mywork4_img from "../../assets/mywork4.jpeg"
import mywork5_img from "../../assets/mywork5.jpeg"
import mywork6_img from "../../assets/mywork6.jpeg"

const Mywork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
        </div>
        <div className="mywork-container">
            <img src={mywork1_img} alt="" />
            <img src={mywork2_img} alt="" />
            <img src={mywork3_img} alt="" />
            <img src={mywork4_img} alt="" />
            <img src={mywork5_img} alt="" />
            <img src={mywork6_img} alt="" />           
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
          <span class="material-symbols-outlined">east</span>
        </div>
    </div>
  )
}

export default Mywork