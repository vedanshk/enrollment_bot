import React from 'react'
import { useSelector } from 'react-redux';
const containerStyle = {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '4px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const nameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
  };

  const ageStyle = {
    fontSize: '16px',
    color: '#666',
  };

  const exitMessageStyle = {
      fontSize: '16px',
      color: '#333',
      marginTop: '10px',
    };
function ConfirmationMessage() {

    const name = useSelector((state) => state.name);
    const age = useSelector((state) => state.age);
  
 
  
    return (
      <div style={containerStyle}>
        <p style={nameStyle}>Name: {name}</p>
        <p style={ageStyle}>Age: {age}</p>
        <p style={exitMessageStyle}>You may exit now.</p>

      </div>
    );
}

export default ConfirmationMessage