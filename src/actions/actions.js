// actions.js
export const nextStep = () => ({
    type: 'NEXT_STEP',
  });
  
  export const addChatMessage = (message) => ({
    type: 'ADD_CHAT_MESSAGE',
    payload: message,
  });
  
  export const selectDate = (date) => ({
    type: 'SELECT_DATE',
    payload: date,
  });
  
  export const selectTime = (time) => ({
    type: 'SELECT_TIME',
    payload: time,
  });
  
  export const setName = (name) => ({
    type: 'SET_NAME',
    payload: name,
  });
  
  export const setAge = (age) => ({
    type: 'SET_AGE',
    payload: age,
  });
  