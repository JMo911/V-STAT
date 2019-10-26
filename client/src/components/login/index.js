import React, { Component } from "react";
import {
    // Button,
    // Col,  
    Container
    // Row
    } from "react-bootstrap";
// import {BrowserRouter, Route, Link} from "react-router-dom";
import './styles.css';
// import InsurerLogin from "../login/insurerlogin"
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";


class LoginPage extends Component {



    render() {
      return (
        <Container>
          <div id="loginArea">
          <img src="https://via.placeholder.com/600x300.png" alt="V-STAT!"/>
          <p>Welcome to V-STAT!</p>
          <p>This program aims to take some of the confusion out of the car repair process, ensuring total transparency throughout every step of your journey. From the time a Customer gets into an accident, to the moment they pick up their fixed vehicle, V-STAT is there every step of the way. </p>
          <p>With V-STAT, get the STATus of your V-hicle, STAT!</p>

          <p>To begin, please select your Login type, whether you are an INSURANCE AGENT, a MECHANIC, or the CUSTOMER.</p>
            <Link to = "/login">
              <Button id="login-button">Login</Button>
            </Link> 

            </div>
        </Container>
      )
    }
}
export default LoginPage;