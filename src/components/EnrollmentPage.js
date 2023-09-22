// Step1.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { nextStep } from '../actions/actions';

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: "#f0f0f0",
    "text-align":'center'
  };

  const buttonStyle = {
    backgroundColor: "#007BFF",
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

const EnrollmentPage = () => {
  const dispatch = useDispatch();

  const handleEnrollClick = () => {
    dispatch(nextStep());
  };

  return (
    <div style={containerStyle}>
      <div>
        <p>Enter into Student Info System</p>
        <button
          style={buttonStyle}
          onClick={handleEnrollClick}
        >
          Enroll Now!
        </button>
      </div>
    </div>
  );
};

export default EnrollmentPage;
