import React, { Component } from "react";
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Container} from "react-bootstrap";
import LoginPage from "./components/login/index";
import LoginBox from "./components/login/loginbox";
import NewTicket from "./components/tickets/index";
import MechanicSplash from "./components/mechanicsplash/mechanicSplash.js";

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
            {/* <Row>
              
              <Col md={8}> */}
                  <Switch>
                    <Route exact path="/InsuranceSplash" component = {InsuranceSplash} />
                    <Route exact path="/MasterView" component = {MasterView} />
                    <Route exact path="/" component={LoginPage} />
                    <Route exact path="/login" component={LoginBox} />
                    <Route exact path="/new-ticket" component={NewTicket} />
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
