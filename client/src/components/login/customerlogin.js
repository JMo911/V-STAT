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



class MechanicLogin extends Component {
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
                            <Button id="mechanic-login-button">Customer Login</Button>
                        </Col>
                </Form>
            </Card.Body>
            </div>
        )
    }
}
export default MechanicLogin;