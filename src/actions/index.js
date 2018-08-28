import {
  GET_ALL_USERS,
  GET_ALL_POSTS,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_USERS_FAIL,
  GET_ALL_POSTS_FAIL
} from "../constants";

export const getAllUsers = () => ({
  type: GET_ALL_USERS
});
export const getAllPosts = () => ({
  type: GET_ALL_POSTS
});
export const getAllUsersSuccess = data => ({
  type: GET_ALL_USERS_SUCCESS,
  data
});
export const getAllUsersFail = error => ({
  type: GET_ALL_USERS_FAIL,
  error
});
export const getAllPostsSuccess = data => ({
  type: GET_ALL_POSTS_SUCCESS,
  data
});
export const getAllPostsFail = error => ({
  type: GET_ALL_POSTS_FAIL,
  error
});
