import React from "react";

import PropTypes from "prop-types";

const List = ({ articles }) => (
  <ul>{articles.map((el, index) => <li key={index}>{el.title}</li>)}</ul>
);

// const List = connect(mapStateToProps)(ConnectedList);

List.propTypes = {
  articles: PropTypes.array.isRequired
};

export default List;
