import React from "react";
import { fetchComments } from "../actions/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Post = styled.div`
  background-color: #ffffff;
  margin: 20px;
  padding: 10px;
  box-shadow: 0 8px 6px -6px grey;
  border-radius: 5px;

  :hover {
    transition: 0.2s;
    transform: scale(1.01);
  }
`;

const ListItem = ({ item, fetchComments }) => {
  const fetchCurrentComments = id => {
    fetchComments(id);
  };

  return (
    <Post>
      <p>Post ID: {item.id}</p>
      <p>Title: {item.title}</p>
      <p> {item.body}</p>

      <Link to="/comments" onClick={() => fetchCurrentComments(item.id)}>
        Comments
      </Link>
    </Post>
  );
};

export default connect(null, { fetchComments })(ListItem);
