import React, { useEffect, useState } from 'react';

const exitMessageStyle = {
  backgroundColor: '#f0f0f0',
  color: '#333',
  padding: '10px',
  textAlign: 'center',
  borderRadius: '4px',
  marginBottom: '16px',
};

const ExitMessage = ({ onClose }) => {

  const [count , setCount] =  useState(5);
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  useEffect(()=>{
    setTimeout(()=>{
        setCount(prevCount =>  prevCount -1);
    }, 1000)
  },[count])

 

  return (
    <div style={exitMessageStyle}>
      Thank you. In {count} seconds, the bot will exit.
    </div>
  );
};

export default ExitMessage;
