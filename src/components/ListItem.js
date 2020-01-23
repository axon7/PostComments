import React from "react";
import { fetchComments } from "../actions/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ListItem = ({ item, fetchComments }) => {
  const fetchCurrentComments = id => {
    fetchComments(id);
  };

  return (
    <div to="/comments" onClick={() => fetchCurrentComments(item.id)}>
      <p>{item.title}</p>
      <p>{item.body}</p>
      <p>{item.id}</p>
      <Link to="/comments">Comments</Link>
    </div>
  );
};

export default connect(null, { fetchComments })(ListItem);
