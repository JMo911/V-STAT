import React, { Component } from "react";
import {
    // Accordion, 
    Button,
    Card,
    Col,  
    // Container,
    Form,
    // Control, 
    Row
    } from "react-bootstrap";
import './styles.css';
import CustomerSignup from "../signup/customersignup";
import {BrowserRouter, Route, Link} from "react-router-dom";



class CustomerLogin extends Component {
    render() {
        return (
            <div className="user-login-area" id="customer-login-area">
            <Card.Body>
                <Form>
                        <Col>
                            <Form.Control placeholder="Last Name" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Ticket #" />
                        </Col>
                        <Col>
                            <Button id="customer-login-button">Customer Login</Button>
                        </Col>
                </Form>

                <BrowserRouter>
                    <Route exact path="/customer-signup-page" component={CustomerSignup} />
                    <Link to = "/customer-signup-page">
                        <Button id="customer-signup-button">Create New User</Button> 
                    </Link>
                </BrowserRouter>

            </Card.Body>
            </div>
        )
    }
}
export default CustomerLogin;