import React from 'react';
import './Studentlogin.css';
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
    // if(username=="rahul" && password=="123")
      navigate("/hacklogins");
    // else{
    //   navigate("/studentlogin");
    // }
  }
  return (
    <div className='loginform'>
      <h2>STUDENT LOGIN</h2>
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
