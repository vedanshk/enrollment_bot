// DateSelector.js
import React, { useState } from 'react';
import './styles/DateSelector.css'; 

const DateSelector = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateSelect = (date) => {
    console.log(date);
    onDateSelect(date);
    setSelectedDate(date);
  };

  const dates = ['15 MAY, MON', '16 MAY, TUE', '17 MAY, WED'];

  return (
    <div className="date-selector">
      <div className="horizontal-date-picker">
        {dates.map((date) => (
          <button
            key={date}
            className={`date-option ${date === selectedDate ? 'selected' : ''}`}
            onClick={() => handleDateSelect(date)}
          >
            {date}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DateSelector;
