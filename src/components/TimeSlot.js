// TimeSlot.js
import React, { useState } from 'react';
import './styles/TimeSlot.css'; // Import the CSS file

const TimeSlot = ({ onTimeSelect }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleTimeClick = (time) => {
    setSelectedSlot(time);
    onTimeSelect(time);
  };

  const timeSlots = {
    morning: ['8:00 AM', '9:00 AM', '10:00 AM'],
    afternoon: ['1:00 PM', '2:00 PM', '3:00 PM'],
    evening: ['6:00 PM', '7:00 PM', '8:00 PM'],
  };

  return (
    <div className="time-slot-container">
      <div className="time-period">
        {Object.keys(timeSlots).map((period) => (
          <div key={period}>
            <p>{period}</p>
            <div className="time-slot-row">
              {timeSlots[period].map((slot, index) => (
                <button
                  key={index}
                  onClick={() => handleTimeClick(`${slot} ${period}`)}
                  className={`time-slot-button ${
                    selectedSlot === `${slot} ${period}` ? 'selected' : ''
                  }`}
                >
                  {`${slot}`}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSlot;
