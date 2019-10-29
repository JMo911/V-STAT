import React from "react";
import {
    Button,
    Card,
    Col,  
    Form,
    Tab,
    Tabs
    } from "react-bootstrap";
    import {Link} from 'react-router-dom';
import './styles.css';
import CustomerSignup from "../signup/customersignup";



export function CustomerLogin() {
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
                            <Link to = "/MasterView">
                                <Button variant="primary">View Ticket</Button>
                            </Link>
                        </Form>
                    </Tab>
                    <Tab eventKey="Signup" title="Sign Up">
                        <CustomerSignup />
                        <Link to = "/MasterView">
                            <Button id="customer-passthru-button">Master View</Button>
                        </Link> 
                    </Tab>
                </Tabs>
            </Card.Body>
            </div>
        )
    }

export default CustomerLogin;