import React, { Component } from "react";
import {
    Button,
    Col,  
    Container,
    Form,
    } from "react-bootstrap";
// import {Link} from 'react-router-dom';
import './styles.css';




const axios = require('axios');


class NewTicket extends Component {
        constructor(props) {
            super(props);
            this.state = {
                vehicleMake: "",
                vehicleModel: "",
                vehicleYear: "",
                vehicleMileage: "",
                estimatedCost: "",
                caseNumber: "",
                mechanicUsername: "",
                customerUsername: ""
            };
            this.handleChange = this.handleChange.bind(this);

            this.handleSubmit = this.handleSubmit.bind(this);
          }
        
          handleChange(event) {
            let name = event.target.name;
            this.setState({[name]: event.target.value});
          }
        
          handleSubmit(event) {
            event.preventDefault();
            const newTicket = {
                vehicleMake: this.state.vehicleMake,
                vehicleModel: this.state.vehicleModel,
                vehicleYear: this.state.vehicleYear,
                vehicleMileage: this.state.vehicleMileage,
                estimatedCost: this.state.estimatedCost,
                caseNumber: this.state.caseNumber
            }
            console.log("At the start, newTicket is: ", newTicket)




            console.log("Cookie call starting...");
            let cookie = document.cookie;
            cookie = cookie.split(', ');
            var result = {};
            for (var i = 0; i < cookie.length; i++) {
                var curSemiSplit = cookie[i].split(';');
                result[curSemiSplit[0]] = curSemiSplit[1]
                var cur = cookie[i].split('=');
                result[cur[0]] = cur[1];
            }
            let token = result.token;
            let userCredentials = token.split('; ');
            let finalToken = userCredentials[0];
        
            axios({
                method: "get",
                url: '/api/users/user-info',
                headers: {
                Authorization: "Bearer " + finalToken
                }
            })
            .then(response => {
                const userData = response.data;
                
            }).catch(function(error) {
                console.log(error);
            })
            axios(
                {
                    method: "post",
                    url: '/api/tickets',
                    data: 
                        newTicket
                      ,
                    headers: {
                        Authorization: "Bearer " + finalToken,
                        "Content-Type": "application/json"
                    }
                }
            )
            .then(function (response) {
                // After creating ticket, agent is redirected to their Ticket View page.
                window.location = "/insurance-ticket-view"
                
            })
            .catch(function (error) {
                console.log(error);
            }); 
            event.preventDefault();
          }
    render() {
      return (
        <Container>
                    <div id="ticketInputArea">
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Vehicle Make</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter Vehicle Make" 
                                        value={this.state.vehicleMake}
                                        onChange={this.handleChange}
                                        name="vehicleMake"
                                    />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Vehicle Model</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter Vehicle Model" 
                                        value={this.state.vehicleModel}
                                        onChange={this.handleChange}
                                        name="vehicleModel"
                                    />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>

                                <Form.Group>
                                    <Form.Label>Vehicle Year</Form.Label>
                                    <Form.Control 
                                        type="text"
                                        placeholder="Vehicle Year" 
                                        value={this.state.vehicleYear}
                                        onChange={this.handleChange}
                                        name="vehicleYear"
                                    />
                                </Form.Group>

                                <Form.Group id="mileage-input">
                                    <Form.Label>Vehicle Mileage</Form.Label>
                                    <Form.Control 
                                        placeholder="Enter Vehicle Mileage" 
                                        value={this.state.vehicleMileage}
                                        onChange={this.handleChange}
                                        name="vehicleMileage"
                                    />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Estimated Cost of Repairs</Form.Label>
                                    <Form.Control 
                                        placeholder="Estimated Cost of Repairs"
                                        value={this.state.estimatedCost}
                                        onChange={this.handleChange}
                                        name="estimatedCost"
                                    />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Case Number</Form.Label>
                                    <Form.Control 
                                        placeholder="Case Number"
                                        value={this.state.caseNumber}
                                        onChange={this.handleChange}
                                        name="caseNumber"
                                    />
                                </Form.Group>
                            </Form.Row>


                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Customer Username</Form.Label>
                                    <Form.Control 
                                        type="text"
                                        placeholder="Customer Username"
                                        value={this.state.customerUsername}
                                        onChange={this.handleChange}
                                        name="customerUsername"
                                    />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Mechanic Username</Form.Label>
                                    <Form.Control 
                                        type="text"
                                        placeholder="Mechanic Username"
                                        value={this.state.mechanicUsername}
                                        onChange={this.handleChange}
                                        name="mechanicUsername"
                                    />
                                </Form.Group>
                            </Form.Row>


                            <Button variant="primary" type="submit">
                                Submit
                            </Button>

                        </Form>
                    </div>
        </Container>
      )
    }
}
export default NewTicket;