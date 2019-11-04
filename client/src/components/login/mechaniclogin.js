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
import MechanicSignup from "../signup/mechanicsignup";
import Cookie from 'universal-cookie';
const axios = require("axios");

class MechanicLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mechanicUsername: "",
            mechanicPassword: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let name = event.target.name;
        this.setState({ [name]: event.target.value });
    }

    handleSubmit(event) {
        const mechaniceRequest = {
            username: this.state.mechanicUsername,
            password: this.state.mechanicPassword
        }
        console.log(mechaniceRequest);
        axios.post('/api/auth', mechaniceRequest)
            .then(function (response) {
                console.log(response);
                const cookie = new Cookie();
                cookie.set('token', response.data.token)
            })
            .catch(function (error) {
                console.log(error);
            });
        event.preventDefault();
    }



    render() {
        return (
            <div id="mechanic-login">
                <Card.Body>
                    <Tabs defaultActiveKey="Login" transition={false} id="noanim-tab-example">
                        <Tab eventKey="Login" title="Log in">
                            <Form onSubmit={this.handleSubmit}>
                                <Col>
                                    <Form.Control
                                        id="mechanic-username-submit"
                                        value={this.state.mechanicUsername}
                                        onChange={this.handleChange}
                                        name="mechanicUsername"
                                        placeholder="Enter Username"
                                    />
                                </Col>
                                <Col>
                                    <Form.Control
                                        id="mechanic-password-submit"
                                        value={this.state.customerPassword}
                                        onChange={this.handleChange}
                                        name="mechanicPassword"
                                        placeholder="Enter Password"
                                    />
                                </Col>
                                <Col>
                                    <Button id="mechanic-login-button" type="submit">Login</Button>
                                </Col>
                            </Form>
                        </Tab>
                        <Tab eventKey="Signup" title="Sign Up">
                            <MechanicSignup />
                        </Tab>
                    </Tabs>
                    <Link to="/mechanic-splash">
                        <Button id="mechanic-splash-button">Mechanic Splash</Button>
                    </Link>
                </Card.Body>
            </div>
        )
    }
}
export default MechanicLogin;

