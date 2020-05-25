/** @format */

import { all } from "redux-saga/effects";

import Posts from "./posts/sagas";

export default function* rootSaga() {
  yield all([...Posts]);
}
