import React from 'react';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const Studentlogin = () => {
  const [username,setusername]=useState('');
  const [password,setpassword]=useState('');
  const navigate=useNavigate();
  let f=0,ty=0;
  const handlesubmit=()=>{
    console.log("user name:",username);
    console.log("password :",password);
    navigate("/createinternship");
  }
  return (
    <div className='loginform'>
      <h2>RND LOGIN</h2>
      <div className='studentlogininput'>
        <input type='email' placeholder='email'  onChange={(e)=>setusername(e.target.value)}/>
      </div>
      <div className='studentlogininput'>
        <input type='password' placeholder='password' onChange={(e)=>setpassword(e.target.value)}/>
      </div>
      <Button variant="info" size="lg"  onClick ={handlesubmit}>
        Login
      </Button>
      
      
    </div>
  );
}

export default Studentlogin;
