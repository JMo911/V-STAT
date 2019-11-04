import React, { Component } from "react";
import {
    Button,
    Card,
    Container,
    Col,
    Form,
    Tab,
    Tabs,
    Alert
} from "react-bootstrap";
import './styles.css';
import CustomerSignup from "../signup/customersignup";
import Cookie from 'universal-cookie';
const axios = require("axios");

class CustomerLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerUsername: "",
            customerPassword: "",
            error: false,
            errormessage: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

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
                // console.log(response.data);
                const userType = response.data.user.UserTypeId;
                // console.log(userType);
                if (userType != 1) {
                    console.log('wrong user type');
                    

                    function reroutetologin() {
                        window.location = "/"
                    }

                    setTimeout(reroutetologin, 3000);
                    // this.setState({
                    //     error: true,
                    //     errormessage: "Please log in at the appropriate page."
                    // });

                } else {
                    // console.log("Hello World");
                    const cookie = new Cookie();
                    cookie.set('token', response.data.token)
                    cookie.set('userId', response.data.user.id)
                    cookie.set('userId', response.data.user.UserTypeId)
                    window.location = "/MasterView";
                }
            })
            .catch(function (error) {
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
                // console.log('catch error')
                // function reroutetologin() {
                //     window.location = "/"
                // }

                // setTimeout(reroutetologin, 3000);
                // this.setState({
                //     error: true,
                //     errormessage: "incorrect username and password"
                // })
                // if (error.response) {
                    // console.log(error.response.data.info.message);
                    // const errormessage = error.response.data.info.message;
                    // this.setState({
                    //     error: true,
                    //     errormessage: "incorrect username and password"
                    // });
                // } 
            }); 
        event.preventDefault();
    }

    render() {
        const errormessage = this.state.errormessage;
        const error = this.state.error;
        return (
            <Container>
                <div id="customer-login">
                    {
                        (error) ? <div>Error: {errormessage}</div>:<div></div>
                    }
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
                                        <Button id="user-login-button" type="submit">Login</Button>
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