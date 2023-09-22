import React, { useState } from "react";
const inputStyle = {
  width: "100%",
  padding: "8px",
  fontSize: "16px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  outline: "none",
};

const NameInput = ({ onNameSubmit }) => {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNameSubmit(name);
  };

  return (
    <div>
      <div style={{ marginBottom: "16px" }}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={handleNameChange}
            style={inputStyle} // Apply inline style
          />
        </form>
      </div>
    </div>
  );
};

export default NameInput;
