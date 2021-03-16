const initialState = {
  items: [],
  filter: "",
  loadingMessages: false,
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "load/messages/start":
      return {
        ...state,
        loadingMessages: true,
      };
    case "load/messages/success":
      return {
        ...state,
        items: action.payload,
        loadingMessages: false,
      };
    default:
      return state;
  }
};

export default messagesReducer;
