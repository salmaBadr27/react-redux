import { ADD_NEW_ARTICLE } from "../constants";
import { combineReducers } from "redux";
const initialState = { articles: [] };
const articleReducer = (reducerPreviousState = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_ARTICLE:
      return {
        ...reducerPreviousState,
        articles: [...reducerPreviousState.articles, action.payload]
      };
    default:
      return reducerPreviousState;
  }
};
export default combineReducers({ articleReducer });
