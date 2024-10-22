import React, { useState, useEffect } from 'react';

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
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name of Internship"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="text"
        value={skillSet}
        onChange={(e) => setSkillSet(e.target.value)}
        placeholder="Skill Set (comma-separated)"
      />
      <input
        type="text"
        value={workingHours}
        onChange={(e) => setWorkingHours(e.target.value)}
        placeholder="Working Hours"
      />
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {storedInternships.map((internship, index) => (
          <li key={index}>
            <strong>{internship.name}</strong><br />
            {internship.description}<br />
            Skills: {internship.skillSet.join(', ')}<br />
            Working Hours: {internship.workingHours}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InternshipInput;
