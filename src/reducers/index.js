import {
  GET_ALL_USERS,
  GET_ALL_POSTS,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_USERS_FAIL,
  GET_ALL_POSTS_FAIL
} from "../constants";
import { combineReducers } from "redux";

const initialState = {
  posts: {
    data: [],
    error: {},
    isWaiting: false
  },
  users: {
    data: [],
    error: {},
    isWaiting: false
  }
};
const appReducer = (state = initialState, action) => {
  const { data, error } = action;
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: { ...initialState.users, isWaiting: true }
      };
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: { ...initialState.posts, isWaiting: true }
      };
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        users: { ...initialState.users, data }
      };
    case GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        posts: { ...initialState.posts, data }
      };
    case GET_ALL_USERS_FAIL:
      return {
        ...state,
        users: { ...initialState.users, error }
      };
    case GET_ALL_POSTS_FAIL:
      return {
        ...state,
        posts: { ...initialState.posts, error }
      };
    default:
      return state;
  }
};
export default combineReducers({ appReducer });
