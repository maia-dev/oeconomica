import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import Home from './components/Home/Home';
import Balance from './containers/Balance/Balance';

import * as actions from './store/actions';

//TODO: ONLY ALLOW AUTH ROUTES TO AUTH USERS
class App extends Component {
  componentDidMount() {
    this.props.checkStorageToken();
  }

  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/balance" component={Balance} />
        </Switch>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthed: state.ui.isAuthed,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkStorageToken: () => dispatch(actions.checkStorageToken()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
