import React, { Component } from "react";
import {
    Button,
    Col,  
    Container,
    Row
    } from "react-bootstrap";
import {BrowserRouter, Route, Link} from "react-router-dom";
import './styles.css';
import InsurerLogin from "../login/insurerlogin"
import MechanicLogin from "../login/mechaniclogin"
import CustomerLogin from "../login/customerlogin"


class LoginBox extends Component {
    render() {
      return (
        <Container>
                <BrowserRouter>
                        <div id="loginBox">
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


                        </div>
                </BrowserRouter>
        </Container>
      )
    }
}
export default LoginBox;