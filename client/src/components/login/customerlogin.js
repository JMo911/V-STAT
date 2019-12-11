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
import Alert from 'react-bootstrap/Alert'
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
            errormessage: '',
            data:[]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // displayError = (errormessage)  => (
    //     <Alert variant="danger">{errormessage}</Alert>
    // )

    handleChange(event) {
        let name = event.target.name;
        this.setState({ [name]: event.target.value });
    }

    handleSubmit(event) {
        const customerRequest = {
            username: this.state.customerUsername,
            password: this.state.customerPassword
        }
  





        // let cookie = document.cookie;
        // cookie = cookie.split(', ');
        // var result = {};
  
        // for (var i = 0; i < cookie.length; i++) {
        //   var curSemiSplit = cookie[i].split(';');
        //   result[curSemiSplit[0]] = curSemiSplit[1];
  
        //     var cur = cookie[i].split('=');
        //     result[cur[0]] = cur[1];
        // }
        // let token = result.token;
        // let userCredentials = token.split('; ');
        // let finalToken = userCredentials[0];
  
  
  
        // axios({
        //   method: "get",
        //   url: '/api/users/user-info',
        //   headers: {
        //     Authorization: "Bearer " + finalToken
        //   }
        // })
        // .then(response => {
        //   const userData = response.data;
        //   console.log("Our user data is: ", userData);
  
        //   console.log("Our user ID is: ", userData.id);
        //   axios({
        //   method: "get",
        //   url: '/api/users/' + userData.id + '/tickets',
        //   headers: {
        //     Authorization: "Bearer " + finalToken
        //   }
        // })
        //   .then(response => {
        //     const data = response.data;
        //     this.setState({ data:data })
  
        //   }).catch(function(error) {
        //     console.log(error);
        //   })
        // }).catch(function(error) {
        //   console.log(error);
        // })







        axios.post('/api/auth', customerRequest)
            .then((response) => {
                // console.log(response.data);
                const userType = response.data.user.UserTypeId;
                // console.log(userType);
                if (userType !== 1) {
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
                    // window.location = `/MasterView/${response.data.caseNumber}`


                    axios({
                        method: "get",
                        url: '/api/users/' + response.data.user.id + '/tickets',
                        headers: {
                          Authorization: "Bearer " + response.data.token
                        }
                      })
                        .then(response => {
                          const data = response.data[0].Tickets[0].id;
                            //   this.setState({ data:data })
                            window.location = "/MasterView/" + data;
                          // console.log("this.state.data is: ", this.state.data);
                          // console.log("this.state.data[0] is: ", this.state.data[0])
                          // console.log("this.state.data[0].tickets is: ", this.state.data[0].tickets)
                          // console.log("this. is: ", this.state.data[0].Tickets)
                
                        }).catch(function(error) {
                          console.log(error);
                        })
      
                }
            })
            .catch((error) => {
                if (error.response) {
                    const errormessage = error.response.data.info.message;
                    this.setState({
                        error: true,
                        errormessage: "Incorrect username or password, please log in again."
                    });
                    // console.log(errormessage);
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
        
        const error = this.state.error;
        const errormessage = this.state.errormessage;
        return (
            <Container>
                <div id="customer-login">
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
                                            type="password"
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