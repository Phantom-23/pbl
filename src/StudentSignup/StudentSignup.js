import React from 'react';
import './StudentSignup.css';
import { useNavigate } from 'react-router-dom';

const StudentSignup = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    // Perform any additional actions, such as form validation or API calls here

    // Navigate to the /studentlogin route after successful signup
    navigate('/studentlogin');
  };

  return (
    <div id="student-signup-container">
      <h2 id="student-signup-title">Student Signup</h2>
      <form id="student-signup-form" onSubmit={handleSubmit}>
        <div id="student-email-field">
          <label htmlFor="student-email-input">Email:</label>
          <input type="email" id="student-email-input" name="email" required />
        </div>

        <div id="student-organization-field">
          <label htmlFor="student-organization-input">Name of Student:</label>
          <input type="text" id="student-organization-input" name="organization" required />
        </div>

        <div id="student-password-field">
          <label htmlFor="student-password-input">Password:</label>
          <input type="password" id="student-password-input" name="password" required />
        </div>

        <button type="submit" id="student-signup-button">Sign Up</button>
      </form>
    </div>
  );
};

export default StudentSignup;
