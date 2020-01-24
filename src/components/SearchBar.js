import React from "react";
import { connect } from "react-redux";
import { searchByTitle } from "../actions/actions";
import styled from "styled-components";

const StyledInput = styled.input`
  border-radius: 20px;
  border: 0px;
  padding: 10px;
  outline: none;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
`;

const SearchBar = ({ searchByTitle, posts }) => {
  const handleInputChange = e => {
    searchByTitle(posts, e.target.value);
  };
  return (
    <div>
      <StyledInput
        onChange={e => handleInputChange(e)}
        placeholder="Search title"
      />
    </div>
  );
};

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps, { searchByTitle })(SearchBar);
