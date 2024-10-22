import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SucessfullyApplied.css'; // Import CSS file for styling

function SuccessPage() {
  const Navigate=useNavigate();
  const handleRedirect = () => {
    Navigate("/hacklogins"); 
  };

  return (
    <div className="Postintern-success-page">
      <h1 className="Postintern-success-title">Application Successful!</h1>
      <p className="Postintern-success-message">
        Your application for the intern position has been successfully submitted.
      </p>
      <button onClick={handleRedirect} className="Postintern-success-button">
        Go to Searchinternships
      </button>
    </div>
  );
}

export default SuccessPage;
