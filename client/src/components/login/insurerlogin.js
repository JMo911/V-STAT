import React, { Component } from "react";
import {
    Button,
    Card,
    Col,
    Form,
    Modal, 
    Row
    } from "react-bootstrap";
import './styles.css';
import {BrowserRouter, Route, Link} from "react-router-dom";
import InsurerSignup from "../signup/signup"

export function InsurerLogin() {

        return (
            <>
            <div className="user-login-area" id="insurance-login-area">
                <Card.Body>
                    <Form>
                        <Col>
                            <Form.Control placeholder="Insurance Company"/>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Insurance Employee ID #" />
                        </Col>
                        <Col>
                            <Button id="insurer-login-button" className="signup-button">
                                Insurance Login
                            </Button>
                        </Col>
                    </Form>




                    {/* <BrowserRouter> */}
                        <Route exact path="/insurer-signup-page" component={InsurerSignup} />
                        <Link to = "/insurer-signup-page">
                            <Button id="insurer-signup-button">Create New User</Button> 
                        </Link>
                        <Link to = "/new-ticket">
                            <Button id="ticket-button">Create New Ticket</Button>
                        </Link> 
                    {/* </BrowserRouter> */}




                </Card.Body>
            </div>
            </>
        )
        }
export default InsurerLogin;