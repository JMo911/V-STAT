import React, { Component } from "react";
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Container} from "react-bootstrap";
import LoginPage from "./components/login/index";
import LoginBox from "./components/login/loginbox";
import NewTicket from "./components/tickets/index";
import MechanicSplash from "./components/mechanicsplash/mechanicSplash.js";

import MasterView from "./components/MasterView/MasterView";
import InsuranceSplash from "./components/InsuranceSplashScreen/index";
import InsuranceTicketView from "./components/InsuranceSplashScreen/insuranceTicketView";


class App extends Component {

  render() {
    return (
        <Container>
          <BrowserRouter>
                  <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <Route exact path="/insurance-splash" component = {InsuranceSplash} />
                    <Route exact path="/insurance-ticket-view" component = {InsuranceTicketView} />
                    <Route path="/MasterView" component = {MasterView} />
                    <Route path="/MasterView/:id" component = {MasterView} />

                    <Route exact path="/login" component={LoginBox} />
                    <Route exact path="/new-ticket" component={NewTicket} />
                    <Route exact path="/mechanic-splash" component={MechanicSplash} />
                  </Switch>
          </BrowserRouter>
        </Container>
    );
  }
}

export default App;
