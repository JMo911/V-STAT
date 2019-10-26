import React, { Component } from "react";
import {
    Button,
    Card,
    Col,  
    Form,
    Row,     
    Tab,
    Tabs
    } from "react-bootstrap";
import './styles.css';
import CustomerSignup from "../signup/customersignup";
import {BrowserRouter, Route, Link} from "react-router-dom";



class CustomerLogin extends Component {
    render() {
        return (
            <div className="user-login-area" id="customer-login-area">
            <Card.Body>

                <Tabs defaultActiveKey="Login" transition={false} id="noanim-tab-example">
                    <Tab eventKey="Login" title="Log In">
                        <Form>
                            <Col>
                                <Form.Control placeholder="Last Name" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Ticket #" />
                            </Col>
                            <Col>
                                <Button id="customer-login-button" class="signup-button">Customer Login</Button>
                            </Col>
                        </Form>
                    </Tab>
                    <Tab eventKey="Signup" title="Sign Up">
                        <Form>
                            <Col>
                                <Form.Control placeholder="Enter Username" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Enter Password" />
                            </Col>
                            <Col>
                                <Button id="new-user-button">Create User</Button>
                            </Col>
                        </Form>
                    </Tab>
                </Tabs>
            </Card.Body>
            </div>
        )
    }
}
export default CustomerLogin;