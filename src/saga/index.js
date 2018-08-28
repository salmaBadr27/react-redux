import { put, fork, all, takeEvery } from "redux-saga/effects";
import { GET_ALL_USERS, GET_ALL_POSTS } from "../constants";
import {
  getAllUsersSuccess,
  getAllUsersFail,
  getAllPostsSuccess,
  getAllPostsFail
} from "../actions";
import { fetchOk } from "../utils/request";

export function* getAllUsers() {
  try {
    console.log("entered saga");

    var usersArgs = [
      "https://jsonplaceholder.typicode.com/users",
      {
        method: "GET"
      }
    ];

    var data = yield fetchOk(usersArgs);
    console.log("data", data);

    yield put(getAllUsersSuccess(data));
  } catch (err) {
    console.log("error", err);
    yield put(getAllUsersFail(err));
  }
}
export function* getAllPosts() {
  try {
    var postsArgs = [
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "GET"
      }
    ];

    var data = yield fetchOk(postsArgs);
    yield put(getAllPostsSuccess(data));
  } catch (err) {
    yield put(getAllPostsFail(err));
  }
}
function* watchFetchUsers() {
  yield takeEvery(GET_ALL_USERS, getAllUsers);
}
function* watchFetchPosts() {
  yield takeEvery(GET_ALL_POSTS, getAllPosts);
}

export function* rootSaga() {
  yield all([fork(watchFetchUsers), fork(watchFetchPosts)]);
}
