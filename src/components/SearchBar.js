import React from "react";
import { connect } from "react-redux";
import { searchByTitle } from "../actions/actions";
const SearchBar = ({ searchByTitle, posts }) => {
  const handleInputChange = e => {
    console.log(e.target.value);
    searchByTitle(posts, e.target.value);
  };
  return (
    <div>
      <input onChange={e => handleInputChange(e)} />
    </div>
  );
};

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps, { searchByTitle })(SearchBar);
