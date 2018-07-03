import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { Query } from 'react-apollo'
// import gql from "graphql-tag"

import Films from './Pages/Films';

import './App.css';

class App extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact={ true } path='/' component={ Films } />
      </Switch>
    );
  }
}

export default App;