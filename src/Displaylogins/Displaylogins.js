import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Displaylogins.css'; // Ensure the CSS file is imported

function DisplayStoredInternships() {
  const Navigate=useNavigate();
  const [storedInternships, setStoredInternships] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('storedInternships');
    if (storedData) {
      setStoredInternships(JSON.parse(storedData));
    }
  }, []);

  const handleApplyClick = (internship) => {
    // Handle the apply action here
    Navigate("/applyform");
    console.log(`Applying for internship: ${internship.name}`);
  };

  return (
    <div className="internships-container">
      <h2>UP SKILL by applying internships</h2>
      <h2>Trending Internships:</h2>
      <div className="internship-cards">
        {storedInternships.map((internship, index) => (
          <div className="internship-card" key={index}>
            <h3 className="internship-title">{internship.name}</h3>
            <p className="internship-description">{internship.description}</p>
            <p className="internship-skills">Skills: {internship.skillSet.join(', ')}</p>
            <p className="internship-hours">Working Hours: {internship.workingHours}</p>
            <button
              className="apply-button"
              onClick={() => handleApplyClick(internship)}
            >
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayStoredInternships;
