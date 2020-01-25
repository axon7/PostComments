import React from "react";
import { fetchComments } from "../actions/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Post = styled.div`
  background-color: #ffffff;
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: 0 8px 6px -6px grey;
  border-radius: 5px;
  max-width: 960px;
  width: 80%;

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
      <p>
        <b>Post ID:</b> {item.id}
      </p>
      <p>
        <b>Title:</b> {item.title}
      </p>
      <p> {item.body}</p>

      <Link to="/comments" onClick={() => fetchCurrentComments(item.id)}>
        Comments
      </Link>
    </Post>
  );
};

export default connect(null, { fetchComments })(ListItem);
