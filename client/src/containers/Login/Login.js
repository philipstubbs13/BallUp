import React, { Component } from 'react';
// import Login form component
import LoginForm from './LoginForm';

class Login extends Component {
 
  render() {
    return (
      <div className="main-content-section">
        <LoginForm />    
      </div>
    );
  }
}

export default Login;