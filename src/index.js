import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./containers/App";

const app = document.getElementById("root");
const Wrapper = () => (
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);
ReactDOM.render(<Wrapper />, app);
