export const loadContacts = () => {
  return (dispatch) => {
    dispatch({
      type: "load/contacts/start",
    });
    fetch("https://api.intocode.ru:8001/api/contacts")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "load/contacts/success",
          payload: json,
        });
      });
  };
};

export const loadMessages = (id) => {
  return (dispatch) => {
    dispatch({
      type: "load/messages/start",
    });
    fetch(
      `https://api.intocode.ru:8001/api/messages/5f2ea3801f986a01cefc8bcd/5f31422e9418570bc43fcbb4/?userId=${id}`
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "load/messages/success",
          payload: json,
        });
      });
  };
};
