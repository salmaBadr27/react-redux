import React from "react";
import List from "../../components/List";
import { connect } from "react-redux";
import { getAllUsers, getAllPosts } from "../../actions";
import Loading from "react-loading-components";

class App extends React.Component {
  componentWillMount(props) {
    this.props.getAllUsers();
    this.props.getAllPosts();
  }

  render(props) {
    if (this.props.users.isWaiting || this.props.posts.isWaiting) {
      return <Loading type="grid" width={100} height={100} fill="#000" />;
    }
    if (
      Object.keys(this.props.users.error).length > 0 ||
      Object.keys(this.props.posts.error).length > 0
    ) {
      return <div> SomeThing unexpected happened :( </div>;
    }
    return <List users={this.props.users.data} posts={this.props.posts.data} />;
  }
}

const mapStateToProps = state => ({
  users: state.appReducer.users,
  posts: state.appReducer.posts
});

const mapDispatchToProps = dispatch => ({
  getAllUsers: () => dispatch(getAllUsers()),
  getAllPosts: () => dispatch(getAllPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
