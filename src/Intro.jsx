import Flasher from '../Add_flasher/Flasher'
import NavBar from '../Components/Navbar'
import Videoadd from '../Video-slider/Videoadd'
import './App.css'
import React from 'react'

export default function Intro(){
    return (
      <div className="Container-fluid">
      <div className='bg-color'>
         <Flasher />
        <header className='App-header'>
          <h1 className='text-img'>SUBASH MATRIC HIGHER SECONDARY SCHOOL</h1>
          <ul>
            <li>DIGITAL CLASSES</li>
            <li>SPORTS</li>
            <li>YOGA</li>
            <li>BAND MUSICAL</li>
            <li>SKATTING</li>
            <li>DINNING HALL</li>
            <li>PLAYGROUND</li>
            <li>VACCATION TRIP</li>
            <li>COMMUNICATION</li>
          </ul>
          <Videoadd />
          <NavBar />
        </header>
      </div>
      </div>
    )
  }

