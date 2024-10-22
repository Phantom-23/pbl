import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../UserContext/UserContext';
import { useNavigate } from 'react-router-dom';
import SucessfullyApplied from '../SucessfullyApplied/SucessfullyApplied.js';
import './ApplyForm.css';

function StudentInput() {
  const { Applied, setapplied } = useContext(UserContext); // Use setapplied here
  const [name, setName] = useState('');
  const [branch, setBranch] = useState('');
  const [skillSet, setSkillSet] = useState('');
  const [availableHrs, setAvailableHrs] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const Navigate=useNavigate();

  const handleSubmit = () => {
    if (name.trim() && branch.trim() && skillSet.trim() && availableHrs.trim()) {
      const newStudent = {
        name,
        branch,
        skillSet: skillSet.split(',').map(skill => skill.trim()),
        availableHrs,
      };
      setapplied([...Applied, newStudent]); 
      setName('');
      setBranch('');
      setSkillSet('');
      setAvailableHrs('');
      setSubmitted(true);
      Navigate("/sucessfulapplied");// sucessful page ki link
    }

  };

  useEffect(() => {
    localStorage.setItem('Applied', JSON.stringify(Applied));
  }, [Applied]);

  // if (submitted) {
  //   return <SucessfullyApplied />;
  // }

  return (
    <div className="Postintern-student-input">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name of Student"
        className="Postintern-input"
      />
      <input
        type="text"
        value={branch}
        onChange={(e) => setBranch(e.target.value)}
        placeholder="Branch"
        className="Postintern-input"
      />
      <input
        type="text"
        value={skillSet}
        onChange={(e) => setSkillSet(e.target.value)}
        placeholder="Skill Set (comma-separated)"
        className="Postintern-input"
      />
      <input
        type="text"
        value={availableHrs}
        onChange={(e) => setAvailableHrs(e.target.value)}
        placeholder="Available Hours"
        className="Postintern-input"
      />
      <button onClick={handleSubmit} className="Postintern-button">Submit</button>
    </div>
  );
}

export default StudentInput;
