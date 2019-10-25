import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Link} from "react-router-dom";
import {Button, Container, Row, Col} from "react-bootstrap";
import LoginPage from "./components/login/index";
import LoginBox from "./components/login/loginbox";
// import LoginForm from "./components/LoginForm";
import SignupPage from "./components/signup/signup";
import NewTicket from "./components/tickets/index";

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
                  <Route exact path="/signup-page" component={SignupPage} />
                  <Route exact path="/new-ticket" component={NewTicket} />
                  
                  <Link to = "/new-ticket">
                      <Button id="ticket-button">Create New Ticket</Button>
                  </Link> 




                </div>
              </Col>
              <Col md={3}>
                <LoginBox />
              </Col>
            </Row>
          </BrowserRouter>
        </Container>
    );
  }
}

export default App;
