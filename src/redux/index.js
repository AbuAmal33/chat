import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import contactsReducer from "./contacts";
import messagesReducer from "./messages";

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  contacts: contactsReducer,
  messages: messagesReducer,
  //profile: profileReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
