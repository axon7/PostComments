import React, { useEffect } from "react";
import ListItem from "./ListItem";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/actions";

const List = ({ fetchPosts, posts }) => {
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      {posts.map(item => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps, { fetchPosts })(List);
