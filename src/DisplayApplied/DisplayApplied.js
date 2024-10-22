import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../UserContext/UserContext';
import './DisplayApplied.css'; // Import your CSS file

function DisplayAppliedStudents() {
  const { Applied } = useContext(UserContext);
  const [appliedStudents, setAppliedStudents] = useState([]);

  // Sync with localStorage when component mounts or Applied context changes
  useEffect(() => {
    const storedData = localStorage.getItem('Applied');
    if (storedData) {
      setAppliedStudents(JSON.parse(storedData));
    }
  }, []);
  const handleContactClick = (student) => {
    // Handle contact action here
    console.log(`Contacting student: ${student.name}`);
  };

  return (
    <div className="applied-students-container">
      <h2 className="appliedstudentheading">Applied Students</h2>
      <div className="applied-student-cards">
        {appliedStudents.length === 0 ? (
          <p className="appliedstudentempty">No students have applied yet.</p>
        ) : (
          appliedStudents.map((student, index) => (
            <div className="applied-student-card" key={index}>
              <h3 className="applied-student-name">{student.name}</h3>
              <p className="applied-student-branch">Branch: {student.branch}</p>
              <p className="applied-student-skills">Skills: {student.skillSet.join(', ')}</p>
              <p className="applied-student-hours">Available Hours: {student.availableHrs}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default DisplayAppliedStudents;
