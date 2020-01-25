import React from "react";
import { connect } from "react-redux";
import Title from "./Title";
import Button from "./Button";
import styled from "styled-components";

const StyledComment = styled.div`
  background-color: #ffffff;
  margin-bottom: 10px;
  padding: 10px;
  box-shadow: 0 8px 6px -6px grey;
  border-radius: 5px;
  max-width: 960px;
  max-width: 960px;
  width: 80%;
`;

const Comments = ({ comments, loading }) => {
  const commentsToRender = comments.map(item => (
    <StyledComment key={item.id}>
      <p>
        <b>Name:</b> {item.name}
      </p>
      <p>
        <b>E-mail:</b> {item.email}
      </p>
      <p>{item.body}</p>
    </StyledComment>
  ));

  return (
    <>
      <Title>Comments</Title>
      <Button linkTo="/">Home</Button>

      {loading ? "Loading" : commentsToRender}
    </>
  );
};

const mapStateToProps = state => ({
  comments: state.comments,
  loading: state.loading
});

export default connect(mapStateToProps)(Comments);
