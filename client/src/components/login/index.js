import React, { Component } from "react";
import {
  Container
} from "react-bootstrap";
import './styles.css';
// import '../../../public/assets/images/VSTAT-logo2.png'
import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap";
import posed from 'react-pose';
// import ReactDOM from 'react-dom';

const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.2,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
  },
  press: {
    scale: 1.1,
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
  }
});

const imagePath = process.env.PUBLIC_URL + '/assets/images/'

class LoginPage extends Component {

  render() {
    return (
      <Container>
        <div id="loginArea">
          <img src="https://i.imgur.com/uSePAap.png" id="logo" alt="V-STAT!" />
          <p>Welcome to V-STAT!</p>
          <p>This program aims to take some of the confusion out of the car repair process, ensuring total transparency throughout every step of your journey. From the time a Customer gets into an accident, to the moment they pick up their fixed vehicle, V-STAT is there every step of the way. </p>
          <p>Whether you're an insurance agent, a mechanic, or a customer, V-STAT can help!</p>
          {/* <p>With V-STAT, get the STATus of your V-hicle, STAT!</p> */}
          <p>To begin, please select the Login button below.</p>
          <Link to="/login">
            <Box id="login-button">Login</Box>
          </Link>
        </div>
      </Container>
    )
  }
}
export default LoginPage;