import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
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
            {/* <Row>
              
              <Col md={8}> */}
                  <Switch>
                    <Route exact path="/" component={LoginPage} />
                    

                    
                    <Route exact path="/login" component={LoginBox} />



                    <Route exact path="/new-ticket" component={NewTicket} />
                    {/* <Link to = "/new-ticket">
                        <Button id="ticket-button">Create New Ticket</Button>
                    </Link>  */}

                    
                    <Route exact path="/mechanic-splash" component={MechanicSplash} />


                  </Switch>
              {/* </Col>

            </Row> */}
          </BrowserRouter>
        </Container>
    );
  }
}

export default App;
