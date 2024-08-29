import React from 'react'
import './Landing.css'


export default function Home() {
  return (
    <div className='landing'>
      
        <video src="/public/VideoBackground/bg.mp4" autoPlay muted Loop className="video-bg" />
        <div className="bg-overlay"></div>
        <div className='navbar'>
            <div className="menu">
            <div>Home</div>
            <div>asscess</div>
            <div>exit</div>
            </div>
        </div>
            <div>
            <div className='home-text'>
            <h1>SUBASH MATRIC HIGHER SECONDARY SCHOOL</h1>
            <p> ANDIPALAYAM TIRUPUR  </p>
        </div>
            </div>
     

        <div className="home-btn">
          Explore
        </div>
    </div>
  )
}
