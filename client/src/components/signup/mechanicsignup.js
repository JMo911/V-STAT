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



class MechanicSignup extends Component {
    render() {
        return (
            <div className="new-user-area">
                <Card.Body>
                    <Form>
                        <Col>
                            <Form.Control id="mechanic-username-input" placeholder="Enter Username" />
                        </Col>
                        <Col>
                            <Form.Control id="mechanic-password-input" placeholder="Enter Password" />
                        </Col>
                        <Col>
                            <Form.Control id="mechanic-first-name-input" placeholder="Enter First Name" />
                        </Col>
                        <Col>
                            <Form.Control id="mechanic-last-name-input" placeholder="Enter Last Name" />
                        </Col>
                        <Col>
                            <Form.Control id="mechanic-shop-input" placeholder="Enter Mechanic Shop" />
                        </Col>
                        <Col>
                            <Button id="new-user-button">Create User</Button>
                        </Col>
                    </Form>
                </Card.Body>
            </div>
        )
    }
}
export default MechanicSignup;