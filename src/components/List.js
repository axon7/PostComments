import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/actions";
import ListItem from "./ListItem";
import Title from "./Title";
import SearchBar from "./SearchBar";

const List = ({ fetchPosts, filteredPosts, posts }) => {
  useEffect(() => {
    if (posts.length <= 0) {
      fetchPosts();
    }
  }, [fetchPosts, posts.length]);
  return (
    <>
      <Title>Posts</Title>
      <SearchBar />
      {filteredPosts.map(item => (
        <ListItem key={item.id} item={item} />
      ))}
    </>
  );
};

const mapStateToProps = state => ({
  filteredPosts: state.filteredPosts,
  posts: state.posts
});

export default connect(mapStateToProps, { fetchPosts })(List);
