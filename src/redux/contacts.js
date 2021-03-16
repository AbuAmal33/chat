const initialState = {
  items: [],
  loadingContacts: false,
}

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'load/contacts/start':
      return {
        ...state,
        loadingContacts: true
      };
    case 'load/contacts/success':
      return {
        ...state,
        items: action.payload,
        loadingContacts: false
      };
    default:
      return state;
  }
};

export default contactsReducer;