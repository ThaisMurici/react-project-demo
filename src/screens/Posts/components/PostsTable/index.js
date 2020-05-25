/** @format */
import { connect } from "react-redux";

import PostsTable from "./PostsTable";

const mapStateToProps = (state) => ({
  posts: state.posts.data,
  loading: state.posts.loading,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PostsTable);
