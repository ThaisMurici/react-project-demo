/** @format */
import { connect } from "react-redux";

import { fetchPosts } from "../../store/posts/duck";

import PostsScreen from "./PostsScreen";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  handleFetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsScreen);
