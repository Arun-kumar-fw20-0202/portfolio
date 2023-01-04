import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from "./pages/navbar.jsx"
import Home from './pages/home'
import Projects from './pages/projects'
import Contact from './pages/contact'
import AboutUs from './pages/about'

function App() {
  return (
    <>
    <head>
      <link rel = "icon" type = "image/png" href = "https://avatars.githubusercontent.com/u/104296654?s=400&u=35ab61832ef8d4889107f891fd9a9469bb49dd0f&v=4" />
    </head>
      <div className="App">
        <section></section>
      <Navbar />
      <Home />
      <AboutUs />
      <Projects />
      <Contact />
      </div>
    </>
  )
}

export default App
