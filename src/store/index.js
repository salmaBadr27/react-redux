import { createStore } from "redux";
import articleReducer from "../reducers";

const store = createStore(
  articleReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
