// App.js
import React from 'react';
import { useSelector } from 'react-redux';
import EnrollmentPage from './components/EnrollmentPage';
import ChatBot from './components/ChatBot';
import ConfirmationMessage from './components/ConfirmationMessage';
import './App.css';


function App() {
  const step = useSelector((state) => state.step);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <EnrollmentPage />;
      case 2:
        return <ChatBot />;
      case 3 : 
      return <ConfirmationMessage/>
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Student Enrollment</h1>
      </header>
      <main className="app-content">
        {renderStep()}
      </main>
    </div>
  );
}

export default App;
