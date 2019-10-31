import React, { Component } from "react";
import {
    Button,
    Card,
    Col,
    Form
} from "react-bootstrap";
import './styles.css';
const axios = require("axios");



class InsurerSignup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            insuranceUsername: "",
            insurancePassword: "",
            insuranceNameFirst: "",
            insuranceNameLast: "",
            insuranceCompany: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let name = event.target.name;
        // let value = event.target.value;
        this.setState({ [name]: event.target.value });
    }

    handleSubmit(event) {
        //   console.log("Our state now contains...", this.state);
        // alert("Submitting...\n" +
        //     "Username: " + this.state.insuranceUsername + "\n" +
        //     "Password: " + this.state.insurancePassword + "\n" + 
        //     "First Name: " + this.state.insuranceNameFirst + "\n" +
        //     "Last Name: " + this.state.insuranceNameLast + "\n" +
        //     "Company: " + this.state.insuranceCompany);
        // alert('A name was submitted: ' + this.state.value);
        const insuranceAgent = {
            username: this.state.insuranceUsername,
            password: this.state.insurancePassword,
            firstName: this.state.insuranceNameFirst,
            lastName: this.state.insuranceNameLast,
            insuranceCompany: this.state.insuranceCompany,
            mechanicShopName: null,
            UserTypeId: 3
        }
        console.log(insuranceAgent);
        axios.post('/api/users', insuranceAgent)
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
            <div className="new-user-area">
                <Card.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <Col>
                            <Form.Control
                                id="insurance-username-input"
                                value={this.state.insuranceUsername}
                                onChange={this.handleChange}
                                name="insuranceUsername"
                                placeholder="Enter Username" />
                        </Col>
                        <Col>
                            <Form.Control
                                id="insurance-password-input"
                                value={this.state.insurancePassword}
                                onChange={this.handleChange}
                                name="insurancePassword"
                                placeholder="Enter Password" />
                        </Col>
                        <Col>
                            <Form.Control
                                id="insurance-first-name-input"
                                value={this.state.insuranceNameFirst}
                                onChange={this.handleChange}
                                name="insuranceNameFirst"
                                placeholder="Enter First Name" />
                        </Col>
                        <Col>
                            <Form.Control
                                id="insurance-last-name-input"
                                value={this.state.insuranceNameLast}
                                onChange={this.handleChange}
                                name="insuranceNameLast"
                                placeholder="Enter Last Name" />
                        </Col>
                        <Col>
                            <Form.Control
                                id="insurance-last-name-input"
                                value={this.state.insuranceCompany}
                                onChange={this.handleChange}
                                name="insuranceCompany"
                                placeholder="Enter Insurance Company" />
                        </Col>
                        <Col>
                            <Button id="new-user-button" type="submit">Create User</Button>
                        </Col>
                    </Form>
                </Card.Body>
            </div>
        )
    }
}
export default InsurerSignup;