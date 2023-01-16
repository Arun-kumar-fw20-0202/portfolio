import React from 'react'
import '../styles/home.css';
import 'font-awesome/css/font-awesome.min.css';


function Home (){
  return (
    <div id="home" className="pages">
        <div className="box">
            <div className="data">
                <h2>Hi, My name is</h2>
                <h1>Arun Kumar</h1>
                <p>I am a goal-oriented, productive and aspiring MERN-Stack web developer. Excited to become an integral part of an organization.</p>
                <a target="_blank" href="https://drive.google.com/file/d/1VDIWje8FP4xyq2HnmkktDFh-KCo8-uus/view?usp=sharing">
                    <button>Resume  <i className="fa fa-download"></i></button>
                </a>
            </div>
        </div>
        <div className="box">
            <div className="imgbx">
                {/* <img src="https://avatars.githubusercontent.com/u/104296654?s=400&u=35ab61832ef8d4889107f891fd9a9469bb49dd0f&v=4" alt="" /> */}
                {/* <img src="https://i.ibb.co/2YzpTT2/Whats-App-Image-2023-01-04-at-2-27-49-PM-removebg-preview.png" alt="" /> */}
                <img src="https://i.ibb.co/6PfJhTP/Arun-Kumar-fw20-0202.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home