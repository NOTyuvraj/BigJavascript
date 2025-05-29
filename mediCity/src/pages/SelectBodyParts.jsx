// pages/SelectBodyParts.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const bodyParts = ['Head', 'Chest', 'Leg', 'Back'];

export const SelectBodyParts = () => {
  const [selectedParts, setSelectedParts] = useState([]);
  const navigate = useNavigate();

  const togglePart = (part) => {
    setSelectedParts(prev =>
      prev.includes(part) ? prev.filter(p => p !== part) : [...prev, part]
    );
  };

  const goToProblems = () => {
    localStorage.setItem('selectedParts', JSON.stringify(selectedParts));
    navigate('/problems');
  };

  return (
    <div className="p-6">
      <h1>Select Body Parts</h1>
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        {bodyParts.map(part => (
          <button
            key={part}
            onClick={() => togglePart(part)}
            style={{
              padding: '10px',
              backgroundColor: selectedParts.includes(part) ? '#007bff' : '#ccc',
              color: '#fff',
              borderRadius: '5px',
              border: 'none'
            }}
          >
            {part}
          </button>
        ))}
      </div>
      <button onClick={goToProblems} style={{ marginTop: '20px' }}>
        Next
      </button>
    </div>
  );
}
