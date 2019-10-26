import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import {Button, Container, Row, Col} from "react-bootstrap";
import LoginPage from "./components/login/index";
import LoginBox from "./components/login/loginbox";
// import LoginForm from "./components/LoginForm";
import SignupPage from "./components/signup/signup";
import MasterView from "./components/MasterView/TicketView";
import InsuranceSplash from "./components/InsuranceSplashScreen/index";

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
                  {/* <LoginPage /> */}
                    <Switch>
                    <Route exact path="/InsuranceSplash" component = {InsuranceSplash} />
                    <Route exact path="/MasterView" component = {MasterView} />
                    <Route exact path="/signup-page" component={SignupPage} />
                    </Switch>

                    <Link to = "/signup-page">
                        <Button id="new-user-button">Create New User</Button>
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
