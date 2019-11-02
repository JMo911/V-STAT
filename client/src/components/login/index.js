import React, { Component } from "react";
import {
    Container
    } from "react-bootstrap";
import './styles.css';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";


class LoginPage extends Component {



    render() {
      return (
        <Container>
          <div id="loginArea">
          <img src="/assets/images/VSTAT-logo2.png" id="logo" alt="V-STAT!"/>
          <p>Welcome to V-STAT!</p>
          <p>This program aims to take some of the confusion out of the car repair process, ensuring total transparency throughout every step of your journey. From the time a Customer gets into an accident, to the moment they pick up their fixed vehicle, V-STAT is there every step of the way. </p>
          <p>Whether you're an insurance agent, a mechanic, or a customer, V-STAT can help!</p>
          {/* <p>With V-STAT, get the STATus of your V-hicle, STAT!</p> */}

          <p>To begin, please select the Login button below.</p>
            <Link to = "/login">
              <Button id="login-button">Login</Button>
            </Link> 

            </div>
        </Container>
      )
    }
}
export default LoginPage;