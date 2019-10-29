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



class InsurerSignup extends Component {
    render() {
        return (
            <div className="new-user-area">
                <Card.Body>
                    <Form>
                        <Col>
                            <Form.Control id="insurance-username-input" placeholder="Enter Username" />
                        </Col>
                        <Col>
                            <Form.Control id="insurance-password-input" placeholder="Enter Password" />
                        </Col>
                        <Col>
                            <Form.Control id="insurance-first-name-input" placeholder="Enter First Name" />
                        </Col>
                        <Col>
                            <Form.Control id="insurance-last-name-input" placeholder="Enter Last Name" />
                        </Col>
                        <Col>
                            <Form.Control id="insurance-company-input" placeholder="Enter Insurance Company" />
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
export default InsurerSignup;