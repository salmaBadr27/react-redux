import React from "react";
import List from "../../components/List";
import { connect } from "react-redux";
import Form from "../../components/Form";
import { addNewArticle } from "../../actions";

const App = props => (
  <div>
    <h2>Articles</h2>
    {/* <List articles={props.propArticles} /> */}
    <List articles={[]} />
    <Form addArticle={props.addArticle} />
  </div>
);

// const mapStateToProps = state => ({ propArticles: state.articles });
const mapStateToProps = state => state;

const addArticleCallback = (article, dispatch) =>
  dispatch(addNewArticle(article));

const mapDispatchToProps = dispatch => ({
  addArticle: article => addArticleCallback(article, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
