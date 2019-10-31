import React, { Component } from "react";
import {
    Button,
    Card,
    Col,
    Form
} from "react-bootstrap";
import './styles.css';
const axios = require("axios");



class CustomerSignup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customerUsername: "",
            customerPassword: "",
            customerNameFirst: "",
            customerNameLast: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let name = event.target.name;
        this.setState({ [name]: event.target.value });
    }

    handleSubmit(event) {
        //   console.log("Our state now contains...", this.state);
        // alert(
        //     "Submitting...\n" +
        //     "Username: " + this.state.customerUsername + 
        //     "\n" +
        //     "Password: " + this.state.customerPassword + 
        //     "\n" + 
        //     "First Name: " + this.state.customerNameFirst + 
        //     "\n" +
        //     "Last Name: " + this.state.customerNameLast
        // );
        const customer = {
            username: this.state.customerUsername,
            password: this.state.customerPassword,
            firstName: this.state.customerNameFirst,
            lastName: this.state.customerNameLast,
            UserTypeId: 1
        }
        axios.post('/api/users', customer)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            }); event.preventDefault();
    }


    render() {
        return (
            <div className="new-user-area">
                <Card.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <Col>
                            <Form.Control
                                id="customer-username-input"
                                value={this.state.customerUsername}
                                onChange={this.handleChange}
                                name="customerUsername"
                                placeholder="Enter Username"
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                id="customer-password-input"
                                value={this.state.customerPassword}
                                onChange={this.handleChange}
                                name="customerPassword"
                                placeholder="Enter Password"
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                id="customer-first-name-input"
                                value={this.state.customerNameFirst}
                                onChange={this.handleChange}
                                name="customerNameFirst"
                                placeholder="Enter First Name"
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                id="customer-last-name-input"
                                value={this.state.customerNameLast}
                                onChange={this.handleChange}
                                name="customerNameLast"
                                placeholder="Enter Last Name"
                            />
                        </Col>
                        <Col>
                            {/* <input type="submit" value="Submit" /> */}
                            <Button id="new-user-button" type="submit">Create User</Button>
                        </Col>
                    </Form>
                </Card.Body>
            </div>
        )
    }
}
export default CustomerSignup;