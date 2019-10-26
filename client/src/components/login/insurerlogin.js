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
import {BrowserRouter, Route, Link} from "react-router-dom";
import InsurerSignup from "../signup/signup"

export function InsurerLogin() {

        return (
            <div className="user-login-area" id="insurance-login-area">
                <Card.Body>
                <Tabs defaultActiveKey="Login" transition={false} id="noanim-tab-example">
                    <Tab eventKey="Login" title="Log In">
                        <Form>
                            <Col>
                                <Form.Control placeholder="Insurance Company" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Agent ID #" />
                            </Col>
                            <Col>
                                <Button id="insurer-login-button" class="signup-button">Insurer Login</Button>
                            </Col>
                        </Form>
                    </Tab>
                    <Tab eventKey="Signup" title="Sign Up">
                        <Form>
                            <Col>
                                <Form.Control placeholder="Enter Insurance Company" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Enter Agent ID #" />
                            </Col>
                            <Col>
                                <Button id="new-user-button">Create User</Button>
                            </Col>
                        </Form>
                    </Tab>
                </Tabs>
                    <Link to = "/new-ticket">
                        <Button id="ticket-button">Create New Ticket</Button>
                    </Link> 




                </Card.Body>
            </div>
        )
        }
export default InsurerLogin;