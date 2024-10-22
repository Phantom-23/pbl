import React from 'react'
import './Homepage.css';
import { Link } from 'react-router-dom'
import Backgroundhome from '../Assests/Backgroundhome.avif';
const Homepage = () => {
  return (
    <div className='homepage'>
        {/* for rnd */}
        <div className='studenthome'>
            <h3>R&D department sign up and login</h3>
            <Link to='/rndsignup'className='removeunderline' >
                <button className='homepagebtn'>
                    Sign UP
                </button>
            </Link>
            <Link to='/rndlogin'className='removeunderline' >
                <button className='homepagebtn'>Login</button>
            </Link>
        </div>

        {/* student */}
        <div className='studenthome'>
            
            <h3>Student sign up and login</h3>
            <Link to='/studentsignup'className='removeunderline' >
                <button className='homepagebtn'>Sign UP</button>
            </Link>
            <Link to='/studentlogin'className='removeunderline' >
                <button className='homepagebtn'>Login</button>
            </Link>
        </div>
        <img src={Backgroundhome} alt="beauty" className='bg'/>
    </div>
  )
}

export default Homepage