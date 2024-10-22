import React, { useState } from 'react';
import './RNDSignup.css';
import { useNavigate } from 'react-router-dom';

const RNDSignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Navigate=useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', { name, email, password });
    Navigate("/rndlogin");
  };

  return (
    <div className="signup-form-container">
      <div className="signup-form-box">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="signup-form-group">
            <label className="signup-form-label" htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              className="signup-form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="signup-form-group">
            <label className="signup-form-label" htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="signup-form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="signup-form-group">
            <label className="signup-form-label" htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className="signup-form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signup-form-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default RNDSignupForm;