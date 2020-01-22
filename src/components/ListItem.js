import React from "react";

const ListItem = ({ item }) => {
  return (
    <div>
      <p>{item.title}</p>
      <p>{item.body}</p>
      <p>{item.id}</p>
    </div>
  );
};

export default ListItem;
