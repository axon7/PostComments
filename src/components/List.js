import React, { useEffect } from "react";
import ListItem from "./ListItem";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/actions";

const List = ({ fetchPosts, filteredPosts, posts }) => {
  useEffect(() => {
    if (posts.length <= 0) {
      fetchPosts();
    }
  }, []);
  return (
    <div>
      {filteredPosts.map(item => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  filteredPosts: state.filteredPosts,
  posts: state.posts
});

export default connect(mapStateToProps, { fetchPosts })(List);
