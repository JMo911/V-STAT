import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Link} from "react-router-dom";
import {Button, Container, Row, Col} from "react-bootstrap";
import LoginPage from "./components/login/index";
import LoginBox from "./components/login/loginbox";
// import LoginForm from "./components/LoginForm";
// import SignupPage from "./components/signup/signup";
import NewTicket from "./components/tickets/index";

import MechanicSplash from "./components/mechanicsplash/mechanicSplash.js";

import InsurerLogin from "./components/login/insurerlogin"
import MechanicLogin from "./components/login/mechaniclogin"
import CustomerLogin from "./components/login/customerlogin"



class App extends Component {

  
  state = {
    username: "",
    userpassword: ""
  };

  render() {
    return (
        <Container>
          <BrowserRouter>
            <Row>
              
              <Col md={8}>
                <div id="mainArea">
                  <Route exact path="/" component={LoginPage} />
                  

                  
                  <Route exact path="/login" component={LoginBox} />
                  <Link to = "/login">
                      <Button id="login-button">Login</Button>
                  </Link> 


                  <Route exact path="/new-ticket" component={NewTicket} />
                  <Link to = "/new-ticket">
                      <Button id="ticket-button">Create New Ticket</Button>
                  </Link> 


                  <Route exact path="/mechanic-splash" component={MechanicSplash} />
                  <Link to = "/mechanic-splash">
                      <Button id="mechanic-button">Show Mechanic Splash Screen</Button>
                  </Link> 


                </div>
              </Col>
              <Col md={4}>
                {/* <div id="loginBox">
                  <Route exact path="/insurance-login" component={InsurerLogin} />


                  <Link to = "/insurance-login">
                      <Button id="insuranceButton">Show Insurance Login</Button>
                  </Link> 

                  <Route exact path="/mechanic-login" component={MechanicLogin} />
                  <Link to = "/mechanic-login">
                      <Button id="mechanicLogin">Show Mechanic Login</Button> 
                  </Link>

                  <Route exact path="/customer-login" component={CustomerLogin} />
                  <Link to = "/customer-login">
                      <Button id="customerLogin">Show Customer Login</Button> 
                  </Link>


                </div>               */}
                {/* <LoginBox /> */}
              </Col>
            </Row>
          </BrowserRouter>
        </Container>
    );
  }
}

export default App;
