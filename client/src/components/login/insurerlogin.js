import React, { Component } from "react";
import {
    Button,
    Card,
    Col,
    Form,
    Tab,
    Tabs,
    Container,
    Alert
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import './styles.css';
import InsurerSignup from "../signup/insurersignup";
import Cookie from 'universal-cookie';
const axios = require("axios");

class InsurerLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            insuranceUsername: "",
            insurancePassword: "",
            error: false,
            errormessage: '',
            data:[]
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
        axios.post('/api/auth', insuranceAgentRequest)
        .then((response) => {
            // console.log(response.data);
            const userType = response.data.user.UserTypeId;
            // console.log(userType);
            if (userType !== 3) {
                // console.log('wrong user type');

                // const errormessage = error.response.data.info.message;
                this.setState({
                    error: true,
                    errormessage: "Please log in at the appropriate page."
                });
                console.log("our error is now: ", this.state.error);
                

            } else {
                    // console.log("Hello World");
                    const cookie = new Cookie();
                    cookie.set('token', response.data.token)
                    cookie.set('userId', response.data.user.id)
                    cookie.set('userTypeId', response.data.user.UserTypeId)
                    window.location = "/insurance-splash";
                }
            })
            .catch((error) => {
                console.log(error);
                if (error.response) {
                    const errormessage = error.response.data.info.message;
                    this.setState({
                        error: true,
                        errormessage: "Incorrect username or password, please log in again."
                    });
                    // console.log(errormessage);
                }

            });
        event.preventDefault();
    }

    render() {
        const error = this.state.error;
        const errormessage = this.state.errormessage;
        return (
            <Container>
            <div id="insurance-login">
                    <div id="alert-area">
                        {
                            (error) ? <Alert variant="danger">Error: {errormessage}</Alert> : <div></div>
                        }
                    </div>
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
                                        type="password"
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
                </Card.Body>
            </div>
            </Container>
        )
    }
}
export default InsurerLogin;