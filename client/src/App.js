// Import React
import React from 'react';
// Import the App css file.
import './App.css';
// Import third party React router library.
import { Route, Switch, BrowserRouter } from 'react-router-dom';
// Import Login page.
import Login from './containers/Login';
// Import Home page.
import Home from './containers/Home';
// import Footer component.
import Footer from './components/Footer';
// import CreateGame component
import CreateGame from './containers/CreateGame';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/newgame" component={CreateGame} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

// export the App component.
export default App;
