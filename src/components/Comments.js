import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
const Comments = ({ comments, loading }) => {
  const commentsToRender = comments.map(item => (
    <div>
      <p>{item.name}</p>
      <p>{item.email}</p>
      <p>{item.body}</p>
    </div>
  ));

  return (
    <div>
      <p>Comments</p>
      <Link to="/">Home</Link>

      {loading ? "Loading" : commentsToRender}
    </div>
  );
};

const mapStateToProps = state => ({
  comments: state.comments,
  loading: state.loading
});

export default connect(mapStateToProps)(Comments);
