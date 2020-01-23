import React from "react";
import { fetchComments } from "../actions/actions";
import { connect } from "react-redux";
const ListItem = ({ item, fetchComments }) => {
  const fetchCurrentComments = id => {
    fetchComments(id);
  };

  return (
    <div onClick={() => fetchCurrentComments(item.id)}>
      <p>{item.title}</p>
      <p>{item.body}</p>
      <p>{item.id}</p>
    </div>
  );
};

export default connect(null, { fetchComments })(ListItem);
