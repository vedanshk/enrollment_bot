import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  nextStep,
  addChatMessage,
  selectDate,
  selectTime,
  setAge,
  setName,
} from "../actions/actions";
import DateSelector from "./DateSelector"; // Import your DateSelector component
import TimeSlot from "./TimeSlot"; // Import your TimeSelector component
import NameInput from "./NameInput";
import AgeDropDown from "./AgeDropDown";
import ExitMessage from "./ExitMessage";
import './styles/ChatBot.css';

const containerStyle = {
  maxWidth: "400px",
  margin: "0 auto",
  border: "1px solid #ccc",
  padding: "5px",
  overflow: "hidden",
  borderRadius: "5px",
  "overflow-y": "scroll",
  height: "500px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
};
const ellipsisStyle = {
  animation: "ellipsis 1.5s infinite",
  fontSize: "24px", // You can adjust the animation duration
};

const botMessageStyle = {
  backgroundColor: "#f0f0f0",
  borderRadius: "5px",
  padding: "8px",
  marginBottom: "10px",
};

const chatMessageStyle = {
  borderRadius: "5px",
  padding: "8px",
  marginBottom: "10px",
};

const buttonStyle = {
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  padding: "8px 15px",
  marginLeft: "10px",
  cursor: "pointer",
};

const ChatBot = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((state) => state.chatMessages);

  const initialBotMessage = "Hello, Welcome to the student info system!";
  const [showDots, setShowDots] = useState(true);
  const [showGotIt, setShowGotIt] = useState(false);
  const [showBotMessage, setShowBotMessage] = useState(false);
  const [showDateSelector, setShowDateSelector] = useState(false);
  const [showTimeSelector, setShowTimeSelector] = useState(false);
  const [showNameInput, setShowNameInput] = useState(false);
  const [showAgeDropDown, setShowAgeDropDown] = useState(false);
  const [showExitMessage, setShowExitMessage] = useState(false);
  const [gotItClicked, setGotItClicked] = useState(false);
  const chatbotRef = useRef(null);

  useEffect(() => {
    // Auto-scroll to the bottom of the chatbot container

    if (chatbotRef.current) {
      chatbotRef.current.scrollTop = chatbotRef.current.scrollHeight;
    }
  }, [chatMessages]);
  
  const handleGotItClick = () => {
    dispatch(addChatMessage(`User: Got it!`));

    setTimeout(() => {
      dispatch(addChatMessage(`Bot: Pick a date!`));
      setShowDateSelector(true);
    }, 1000);
    setGotItClicked(true);
  };

  const startBotMessage = () => {
    setTimeout(() => {
      setShowBotMessage(true);
      setShowDots(false);
      setShowGotIt(true);
    }, 3000); // Wait for 3 seconds before showing the bot's message
  };

  useEffect(() => {
    startBotMessage();
  }, []);

  const handleDateSelect = (date) => {
    dispatch(selectDate(date));
    dispatch(addChatMessage(`User: ${date}`));
    setShowDateSelector(false);
    dispatch(addChatMessage(`Bot: Pick a Time!`));
    setShowTimeSelector(true);
  };

  const handleTimeSelect = (time) => {
    dispatch(selectTime(time));

    dispatch(addChatMessage(`User: ${time}`));
    setShowTimeSelector(false);
    dispatch(addChatMessage("Bot: Enter your name"));
    setShowNameInput(true);
  };

  const handleNameSubmit = (name) => {
    dispatch(setName(name));

    dispatch(addChatMessage(`User: ${name}`));
    dispatch(addChatMessage("Bot: Enter Age"));
    setShowAgeDropDown(true);

    setShowNameInput(false);
  };
  const handleAgeSelect = (age) => {
    dispatch(setAge(age));

    dispatch(addChatMessage(`User: ${age}`));
    setShowAgeDropDown(false);
    setShowExitMessage(true);
  };

  const handleOnClose = () => {
    setShowBotMessage(false);
    dispatch(nextStep());
  };

  return (
    <div style={containerStyle} ref={chatbotRef}>
      {showDots && (
        <p>
          <span style={ellipsisStyle}>...</span>
        </p>
      )}
      {showBotMessage && (
        <p style={botMessageStyle}>Bot: {initialBotMessage}</p>
      )}

      {showGotIt && (
        <button
          style={buttonStyle}
          onClick={handleGotItClick}
          disabled={gotItClicked}
        >
          Got it!
        </button>
      )}
     {chatMessages.map((message, index) => (
        <p
          key={index}
          className={message.startsWith("Bot:") ? "bot-message" : "user-message"}
          style={chatMessageStyle}
        >
          {message}
        </p>
      ))}
      {showDateSelector && (
        <div>
          <DateSelector onDateSelect={handleDateSelect} />{" "}
          {/* Render the DateSelector component */}
        </div>
      )}
      {showTimeSelector && (
        <div>
          <TimeSlot onTimeSelect={handleTimeSelect} />{" "}
          {/* Render the TimeSelector component */}
        </div>
      )}

      {showNameInput && (
        <div>
          <NameInput onNameSubmit={handleNameSubmit} />
        </div>
      )}

      {showAgeDropDown && (
        <div>
          <AgeDropDown onAgeSelect={handleAgeSelect} />
        </div>
      )}

      {showExitMessage && (
        <div>
          <ExitMessage onClose={handleOnClose} />
        </div>
      )}
    </div>
  );
};

export default ChatBot;
