import React, { useState, useEffect } from 'react';
import './Createinternship.css';
import { Link } from 'react-router-dom';

function InternshipInput() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [skillSet, setSkillSet] = useState('');
  const [workingHours, setWorkingHours] = useState('');
  const [storedInternships, setStoredInternships] = useState([]);

  // Load stored internships from localStorage when the component mounts
  useEffect(() => {
    const storedData = localStorage.getItem('storedInternships');
    if (storedData) {
      setStoredInternships(JSON.parse(storedData));
    }
  }, []);

  // Save the current list of storedInternships to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('storedInternships', JSON.stringify(storedInternships));
  }, [storedInternships]);

  const handleSubmit = () => {
    if (name.trim() && description.trim() && skillSet.trim() && workingHours.trim()) {
      const newInternship = {
        name,
        description,
        skillSet: skillSet.split(',').map(skill => skill.trim()),
        workingHours,
      };
      setStoredInternships([...storedInternships, newInternship]);
      setName('');
      setDescription('');
      setSkillSet('');
      setWorkingHours('');
    }
  };

  return (
    <div className="main-page">
      <nav className="navbar">
        <ul>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/createinternship" className="nav-link">Create Internship</Link></li>
          <li><Link to="/displayapplied" className="nav-link">Applied Students</Link></li>
        </ul>
      </nav>

      <div className="Postintern-container">
        <h1>ADD Internship</h1>
        <div className="Postintern-input-group">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name of Internship"
            className="Postintern-input"
          />
        </div>
        <div className="Postintern-input-group">
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write a detailed description"
            className="Postintern-input"
          />
        </div>
        <div className="Postintern-input-group">
          <input
            type="text"
            value={skillSet}
            onChange={(e) => setSkillSet(e.target.value)}
            placeholder="Skill Set (comma-separated)"
            className="Postintern-input"
          />
        </div>
        <div className="Postintern-input-group">
          <input
            type="text"
            value={workingHours}
            onChange={(e) => setWorkingHours(e.target.value)}
            placeholder="Working Hours"
            className="Postintern-input"
          />
        </div>
        <button onClick={handleSubmit} className="Postintern-button">Submit</button>
      </div>
    </div>
  );
}

export default InternshipInput;
