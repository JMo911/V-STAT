import React, { Component } from "react";
import "./App.css";
import LoginForm from './components/LoginForm';

class App extends Component {

  render() {
    return (
        <div className="container">
          <LoginForm loginSubmit={() => { this.loginUser() }}/>
         </div>
    );
  }
}

export default App;
