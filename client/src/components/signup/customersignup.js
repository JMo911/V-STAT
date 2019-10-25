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



class CustomerSignup extends Component {
    render() {
        return (
            <div className="new-user-area">
                <Card.Body>
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
                </Card.Body>
            </div>
        )
    }
}
export default CustomerSignup;