import React, { Component } from "react";
import {
    Button,
    Card,
    Col,  
    Form
    } from "react-bootstrap";
import './styles.css';



class SignupPage extends Component {
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
export default SignupPage;