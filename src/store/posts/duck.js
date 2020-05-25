/** @format */

export const name = "POSTS";

// Action types

export const types = {
  FETCH_POSTS: `${name}/FETCH_POSTS`,
};

// Reducer

export const initialState = {
  data: [],
  loading: false,
};

export default function reducer(state = initialState, action = { type: "" }) {
  switch (action.type) {
    default:
      return state;
  }
}

// Action Creators
export const fetchPosts = () => ({
  type: types.FETCH_POSTS,
});
