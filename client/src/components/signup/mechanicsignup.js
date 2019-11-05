import React, { Component } from "react";
import {
    Button,
    Card,
    Col,  
    Form
    } from "react-bootstrap";
import './styles.css';
const axios = require('axios');



class InsurerSignup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mechanicUsername: "",
            mechanicPassword: "",
            mechanicNameFirst: "",
            mechanicNameLast: "", 
            mechanicShopName: ""       
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        let name = event.target.name;
        this.setState({[name]: event.target.value});
      }
    
      handleSubmit(event) {
        const mechanic = {
            username: this.state.mechanicUsername,
            password: this.state.mechanicPassword,
            firstName: this.state.mechanicNameFirst,
            lastName: this.state.mechanicNameLast,
            insuranceCompany: null,
            mechanicShopName: this.state.mechanicShopName,
            UserTypeId: 2
        }
        axios.post('/api/registration/', mechanic)
            .then(function (response) {
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
                            id="mechanic-username-input"
                            value={this.state.mechanicUsername} 
                            onChange={this.handleChange}
                            name="mechanicUsername"
                            placeholder="Enter Username" />
                        </Col>
                        <Col>
                            <Form.Control 
                            id="mechanic-password-input" 
                            value={this.state.mechanicPassword} 
                            onChange={this.handleChange}
                            name="mechanicPassword"
                            placeholder="Enter Password" />
                        </Col>
                        <Col>
                            <Form.Control 
                            id="mechanic-first-name-input" 
                            value={this.state.mechanicNameFirst} 
                            onChange={this.handleChange}
                            name="mechanicNameFirst"
                            placeholder="Enter First Name" />
                        </Col>
                        <Col>
                            <Form.Control 
                            id="mechanic-last-name-input" 
                            value={this.state.mechanicNameLast} 
                            onChange={this.handleChange}
                            name="mechanicNameLast"
                            placeholder="Enter Last Name" />
                        </Col>
                        <Col>
                            <Form.Control 
                            id="mechanic-last-name-input" 
                            value={this.state.mechanicShopName} 
                            onChange={this.handleChange}
                            name="mechanicShopName"
                            placeholder="Enter Mechanic Shop" />
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