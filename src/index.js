import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path={"/:userId?/:chatId?/:profileId?"}>
        <App />
      </Route>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
