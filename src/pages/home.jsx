import React from 'react'
import '../styles/home.css';

function Home (){
  return (
    <div id="home" className="pages">
        <div className="box">
            <div className="data">
                <h2>Hi, My name is</h2>
                <h1>Arun Kumar</h1>
                <p>I am a goal-oriented, productive and aspiring MERN-Stack web developer. Excited to become an integral part of an organization.</p>
                <a target="_blank" href="https://drive.google.com/file/d/1VDIWje8FP4xyq2HnmkktDFh-KCo8-uus/view?usp=sharing">
                    <button>Resume <i classname="fa fa-facebook"></i></button>
                </a>
            </div>
        </div>
        <div className="box">
            <div className="imgbx">
                <img src="https://avatars.githubusercontent.com/u/104296654?s=400&u=35ab61832ef8d4889107f891fd9a9469bb49dd0f&v=4" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home