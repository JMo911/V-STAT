import Cookies from 'universal-cookie';
import React, { Component } from "react";
import {
    Button,
    Card,
    Container,
    Col,
    Form,
    Tab,
    Tabs
} from "react-bootstrap";
// import {Link} from 'react-router-dom';
import './styles.css';
import CustomerSignup from "../signup/customersignup";
const axios = require("axios");

class CustomerLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customerUsername: "",
            customerPassword: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    cookies = new Cookies();

    handleChange(event) {
        let name = event.target.name;
        this.setState({ [name]: event.target.value });
    }

    handleSubmit(event) {
        const customerRequest = {
            username: this.state.customerUsername,
            password: this.state.customerPassword
        }
        axios.post('/api/auth', customerRequest)
            .then(function (response) {
                this.cookies.set('token', response.data.token);
                // console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            }); event.preventDefault();
    }

    render() {
        return (
            <Container>
                <div id="customer-login">
                    <Card.Body>
                        <Tabs defaultActiveKey="Login" transition={false} id="noanim-tab-example">
                            <Tab eventKey="Login" title="Log in">
                                <Form onSubmit={this.handleSubmit}>
                                    <Col>
                                        <Form.Control
                                            id="customer-username-submit"
                                            value={this.state.customerUsername}
                                            onChange={this.handleChange}
                                            name="customerUsername"
                                            placeholder="Enter Username"
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            id="customer-password-submit"
                                            value={this.state.customerPassword}
                                            onChange={this.handleChange}
                                            name="customerPassword"
                                            placeholder="Enter Password"
                                        />
                                    </Col>
                                    <Col>
                                        <Button id="user-login-button" type="submit">Create User</Button>
                                    </Col>
                                </Form>
                            </Tab>
                            <Tab eventKey="Signup" title="Sign Up">
                                <CustomerSignup />
                            </Tab>
                        </Tabs>
                    </Card.Body>
                </div>
            </Container>
        )
    }
}
export default CustomerLogin;