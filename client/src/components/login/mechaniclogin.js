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
import MechanicSignup from "../signup/mechanicsignup";
import { Route, Link} from "react-router-dom";



class MechanicLogin extends Component {
    render() {
        return (
            <div className="user-login-area" id="mechanic-login-area">
            <Card.Body>
                <Tabs defaultActiveKey="Login" transition={false} id="noanim-tab-example">
                    <Tab eventKey="Login" title="Log In">
                        <Form>
                            <Col>
                                <Form.Control placeholder="Automotive Body Shop Name" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Body Shop Password" />
                            </Col>
                            <Col>
                                <Button id="mechanic-login-button" class="signup-button">Mechanic Login</Button>
                            </Col>
                        </Form>
                    </Tab>
                    <Tab eventKey="Signup" title="Sign Up">
                        <Form>
                            <Col>
                                <Form.Control placeholder="Enter Body Shop Name" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Enter Body Shop Password" />
                            </Col>
                            <Col>
                                <Button id="new-user-button">Create User</Button>
                            </Col>
                        </Form>
                    </Tab>
                </Tabs>

                    <Link to = "/mechanic-splash">
                        <Button id="mechanic-button">Show Mechanic Splash Screen</Button>
                    </Link> 


            </Card.Body>
            </div>
        )
    }
}
export default MechanicLogin;