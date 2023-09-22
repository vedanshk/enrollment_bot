import React, { useState } from 'react';

const AgeDropDown = ({ onAgeSelect }) => {
  const [selectedAge, setSelectedAge] = useState('');

  const handleAgeChange = (event) => {
    setSelectedAge(event.target.value);
  };

  const handleSubmit = () => {
    onAgeSelect(selectedAge);
  };

  const selectStyle = {
    width: '100%',
    padding: '8px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    outline: 'none',
  };

    const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '8px 16px',
    cursor: 'pointer',
  };
  return (
    <div>
      <div style={{ marginBottom: '16px' }}>
        <select value={selectedAge} onChange={handleAgeChange} style={selectStyle}>
          <option value="">Select Age</option>
          {Array.from({ length: 23 }, (_, i) => (
            <option key={i} value={i + 18}>
              {i + 18}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleSubmit} style={buttonStyle}>Submit</button>
    </div>
  );
};

export default AgeDropDown;
