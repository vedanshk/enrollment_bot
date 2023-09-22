// reducers.js
const initialState = {
    step: 1,
    chatMessages: [],
    selectedDate: null,
    selectedTime: null,
    name: '',
    age: '',
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'NEXT_STEP':
        return { ...state, step: state.step + 1 };
      case 'ADD_CHAT_MESSAGE':
        return { ...state, chatMessages: [...state.chatMessages, action.payload] };
      case 'SELECT_DATE':
        return { ...state, selectedDate: action.payload };
      case 'SELECT_TIME':
        return { ...state, selectedTime: action.payload };
      case 'SET_NAME':
        return { ...state, name: action.payload };
      case 'SET_AGE':
        return { ...state, age: action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  