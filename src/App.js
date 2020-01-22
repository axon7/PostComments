import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "./actions/actions";
const App = ({ fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, []);

  return <div></div>;
};

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps, { fetchPosts })(App);
