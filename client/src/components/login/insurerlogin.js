import React, { Component } from "react";
import {
    Button,
    Card,
    Col,
    Form,
    Tab,
    Tabs
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import './styles.css';
import InsurerSignup from "../signup/insurersignup";
const axios = require("axios");

class InsurerLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            insuranceUsername: "",
            insurancePassword: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let name = event.target.name;
        this.setState({ [name]: event.target.value });
    }

    handleSubmit(event) {
        const insuranceAgentRequest = {
            username: this.state.insuranceUsername,
            password: this.state.insurancePassword
        }
        console.log(insuranceAgentRequest);
        axios.post('/api/auth', insuranceAgentRequest)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        event.preventDefault();
    }



    render() {
        return (
            <div id="insurance-login">
                <Card.Body>
                    <Tabs defaultActiveKey="Login" transition={false} id="noanim-tab-example">
                        <Tab eventKey="Login" title="Log in">
                            <Form onSubmit={this.handleSubmit}>
                                <Col>
                                    <Form.Control
                                        id="insurance-username-submit"
                                        value={this.state.insuranceUsername}
                                        onChange={this.handleChange}
                                        name="insuranceUsername"
                                        placeholder="Enter Username"
                                    />
                                </Col>
                                <Col>
                                    <Form.Control
                                        id="insurance-password-submit"
                                        value={this.state.customerPassword}
                                        onChange={this.handleChange}
                                        name="insurancePassword"
                                        placeholder="Enter Password"
                                    />
                                </Col>
                                <Col>
                                    <Button id="insurance-login-button" type="submit">Login</Button>
                                </Col>
                            </Form>
                        </Tab>
                        <Tab eventKey="Signup" title="Sign Up">
                            <InsurerSignup />
                        </Tab>
                    </Tabs>
                    <Link to="/insurance-splash">
                        <Button id="insurance-splash-button">Insurance Splash</Button>
                    </Link>
                </Card.Body>
            </div>
        )
    }
}
export default InsurerLogin;

