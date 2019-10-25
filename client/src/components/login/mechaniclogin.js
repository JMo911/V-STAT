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
import MechanicSignup from "../signup/mechanicsignup";
import {BrowserRouter, Route, Link} from "react-router-dom";



class MechanicLogin extends Component {
    render() {
        return (
            <div className="user-login-area" id="mechanic-login-area">
            <Card.Body>
                <Form>
                        <Col>
                            <Form.Control placeholder="Automotive Body Shop" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Automotive Body Shop Password" />
                        </Col>
                        <Col>
                            <Button id="mechanic-login-button">Mechanic Login</Button>
                        </Col>
                </Form>


                <BrowserRouter>
                    <Route exact path="/mechanic-signup-page" component={MechanicSignup} />
                    <Link to = "/mechanic-signup-page">
                        <Button id="mechanic-signup-button">Create New User</Button> 
                    </Link>
                </BrowserRouter>


            </Card.Body>
            </div>
        )
    }
}
export default MechanicLogin;