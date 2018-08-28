import React from "react";
import PropTypes from "prop-types";

const getUserByUserId = (usersList, userId) =>
  usersList.filter(element => element.id === userId)[0];

const List = ({ users, posts }) => (
  <div>
    {posts.map((e, index) => (
      <div key={e.id}>
        <li>{getUserByUserId(users, e.userId).username}</li>
        <li>{e.title}</li>
        <li>{e.body}</li>
      </div>
    ))}
  </div>
);

List.propTypes = {
  users: PropTypes.array.isRequired,
  posts: PropTypes.array.isRequired
};

export default List;
