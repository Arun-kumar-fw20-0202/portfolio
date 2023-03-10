import React from 'react'
import '../styles/home.css';
import 'font-awesome/css/font-awesome.min.css';


function Home (){
  return (
    <div id="home" className="pages">
        <div className="box">
            <div className="data">
                <h2>Hi, My name is</h2>
                <h1 id="user-detail-name">Arun Kumar</h1>
                <p id="user-detail-intro">I am a goal-oriented, productive and aspiring MERN-Stack web developer. Excited to become an integral part of an organization.</p>
                <a target="_blank" href="https://drive.google.com/file/d/1VDIWje8FP4xyq2HnmkktDFh-KCo8-uus/view?usp=sharing">
                    <button id="resume-button-1">Resume  <i className="fa fa-download"></i></button>
                </a>
            </div>
        </div>
        <div className="box">
            <div className="imgbx">
                <img class="home-img" src="https://i.ibb.co/3NCh0jw/image-removebg-preview-1.png" />
                {/* // <img src="https://i.ibb.co/2YzpTT2/Whats-App-Image-2023-01-04-at-2-27-49-PM-removebg-preview.png" alt="" /> */}
                {/* <img src="https://i.ibb.co/6PfJhTP/Arun-Kumar-fw20-0202.jpg" alt="" /> */}
            </div>
        </div>
    </div>
  )
}

export default Home