import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Main';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/*" component={ Main }/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;