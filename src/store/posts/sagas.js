/** @format */

import { call, put, takeLatest } from "redux-saga/effects";

import apiService from "../../services/apiService";

import {
  types as PostActionTypes,
  fetchPostsSuccess,
  fetchPostsFailure,
} from "./duck";

export function* fetchPosts() {
  try {
    const { data } = yield call(apiService.get, "/posts");

    yield put(fetchPostsSuccess({ posts: data }));
  } catch (error) {
    yield put(fetchPostsFailure());
  }
}

export default [takeLatest(PostActionTypes.FETCH_POSTS, fetchPosts)];
