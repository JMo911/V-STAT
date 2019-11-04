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
                // console.log(response);
                const userType = response.data.user.UserTypeId;
                console.log(userType);
                if (userType != 2) {
                    console.log('wrong user type');
                    // this.setState({
                    //     error: true,
                    //     errormessage: "Please log in at the appropriate page."
                    // })
                    function reroutetologin() {
                        window.location = "/"
                    }
                    setTimeout(reroutetologin, 3000);
                } else {
                    // console.log("Hello World");
                    const cookie = new Cookie();
                    cookie.set('token', response.data.token)
                    cookie.set('userId', response.data.user.id)
                    cookie.set('userId', response.data.user.UserTypeId)
                    window.location = "/mechanic-splash";
                }
            })
            .catch(function (error) {
                console.log(error);
                if (error.response) {
                    console.log(error.response.data.info.message);
                    const errormessage = error.response.data.info.message;
                    function reroutetologin() {
                        window.location = "/"
                    }

                    setTimeout(reroutetologin, 3000);
                    // this.setState({
                    //     error: true,
                    //     errormessage: errormessage
                    // });
                }
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

