/** @format */
import { combineReducers } from "redux";

import posts from "./posts/duck";

const reducers = combineReducers({
  posts,
});

export default reducers;
