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

export default CustomerLogin;