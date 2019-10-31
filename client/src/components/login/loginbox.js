import React, { Component } from "react";
import {
    Container,
    Tab,
    Tabs
    } from "react-bootstrap";
import './styles.css';
import InsurerLogin from "../login/insurerlogin"
import MechanicLogin from "../login/mechaniclogin"
import CustomerLogin from "../login/customerlogin"


class LoginBox extends Component {
    render() {
      return (
        <Container className="centered" id="loginBox">
            <Tabs defaultActiveKey="CustomerLogin" transition={false} id="noanim-tab-example">
                <Tab eventKey="InsurerLogin" title="InsurerLogin">
                    <InsurerLogin />
                </Tab>
                <Tab eventKey="MechanicLogin" title="MechanicLogin">
                    <MechanicLogin />
                </Tab>
                <Tab eventKey="CustomerLogin" title="CustomerLogin">
                    <CustomerLogin />
                </Tab>
            </Tabs>
        </Container>
      )
    }
}
export default LoginBox;