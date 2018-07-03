// Import React
import React, { Component } from 'react';
// Import the App css file.
import './App.css';
// Import query-string (used for authentication).
import queryString from "query-string";
// Import third party React router library.
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
// Import Login page.
import Login from './containers/Login';
// Import Home page.
import Home from './containers/Home';

class App extends Component {

  render() {
    return (
       <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

// export the App component.
export default App;
