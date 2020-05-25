/** @format */

export const name = "POSTS";

// Action types

export const types = {
  FETCH_POSTS: `${name}/FETCH_POSTS`,
  FETCH_POSTS_SUCCESS: `${name}/FETCH_POSTS_SUCCESS`,
  FETCH_POSTS_FAILURE: `${name}/FETCH_POSTS_FAILURE`,
};

// Reducer

export const initialState = {
  data: [],
  loading: false,
};

export default function reducer(state = initialState, action = { type: "" }) {
  switch (action.type) {
    case types.FETCH_POSTS:
      return { ...state, loading: true };
    case types.FETCH_POSTS_SUCCESS:
      return { ...state, data: action.payload.posts, loading: false };
    case types.FETCH_POSTS_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
}

// Action Creators
export const fetchPosts = () => ({
  type: types.FETCH_POSTS,
});

export const fetchPostsSuccess = ({ posts }) => ({
  type: types.FETCH_POSTS_SUCCESS,
  payload: { posts },
});

export const fetchPostsFailure = () => ({
  type: types.FETCH_POSTS_FAILURE,
});
