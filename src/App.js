import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './components/Home/Home';
import Balance from './containers/Balance/Balance';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/balance" exact component={Balance} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
