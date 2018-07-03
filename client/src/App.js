import React, { Component } from 'react';
import './App.css';
import queryString from "query-string";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from './containers/Login';

class App extends Component {

  render() {
    return (
       <BrowserRouter>
        <Switch>
        <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
