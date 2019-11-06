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
                caseNumber: ""
                // mechanicUsername: "",
                // customerUsername: ""
            };
            this.handleChange = this.handleChange.bind(this);

            this.handleSubmit = this.handleSubmit.bind(this);
          }
        
          handleChange(event) {
            let name = event.target.name;
            console.log("event.target.name is... ", event.target.name)
            this.setState({[name]: event.target.value});
          }
        
          handleSubmit(event) {
            event.preventDefault();
            console.log("HandleSubmit function begun.");
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
            // console.log("Our cookie is: ", document.cookie);
            cookie = cookie.split(', ');
            var result = {};
        
            for (var i = 0; i < cookie.length; i++) {
                var curSemiSplit = cookie[i].split(';');
                result[curSemiSplit[0]] = curSemiSplit[1]
                var cur = cookie[i].split('=');
                result[cur[0]] = cur[1];
            }
            let token = result.token;
            // console.log(token);
            let userCredentials = token.split('; ');
            // console.log(userCredentials);
            let finalToken = userCredentials[0];
        
            console.log("Our final token is: ", finalToken)
        
            console.log("Cookie call completed.")
            console.log("Querying server...");
            axios({
                method: "get",
                url: '/api/users/user-info',
                headers: {
                Authorization: "Bearer " + finalToken
                }
            })
            .then(response => {
                console.log("Response received from server.");
                const userData = response.data;
                // this.setState({ userData:userInfoData })
                console.log("Our user data is: ", userData);
        
                console.log("Our user ID is: ", userData.id);
                // FIRST make an API call to the user info API, THEN use that result to populate res.data.id, below.
                
            }).catch(function(error) {
                console.log(error);
            })

            console.log("Starting Axios post...");
            console.log("We are about to post: ", newTicket.vehicleMake)
            axios(
                {
                    method: "post",
                    url: '/api/tickets',
                    headers: {
                        Authorization: "Bearer " + finalToken,
                        "Content-Type": "application/json"
                    }
                }, 
                {withCredentials: true},
                newTicket.vehicleMake
            )
            
            // axios.post(
                // '/api/tickets', newTicket
                // {
                //     vehicleMake: this.state.vehicleMake,
                //     vehicleModel: this.state.vehicleModel,
                //     vehicleYear: this.state.vehicleYear,
                //     vehicleMileage: this.state.vehicleMileage,
                //     estimatedCost: this.state.estimatedCost,
                //     caseNumber: this.state.caseNumber
                // }
            // )
            .then(function (response) {
                console.log("Axios post completed.");
                console.log("After the Axios post, newTicket is: ", newTicket)
                console.log("Server status is: ", response.status + " " + response.statusText)
                console.log("Server response is: ", response)
                // After creating ticket, agent is redirected to their Ticket View page.
                window.location = "/insurance-ticket-view"
                
            })
            .catch(function (error) {
                console.log(error);
            }); 
            event.preventDefault();
          }














        // componentWillMount() {
        //     let cookie = document.cookie;
        //     // console.log("Our cookie is: ", document.cookie);
        //     cookie = cookie.split(', ');
        //     var result = {};
        
        //     for (var i = 0; i < cookie.length; i++) {
        //         var curSemiSplit = cookie[i].split(';');
        //         result[curSemiSplit[0]] = curSemiSplit[1]
        //         var cur = cookie[i].split('=');
        //         result[cur[0]] = cur[1];
        //     }
        //     let token = result.token;
        //     // console.log(token);
        //     let userCredentials = token.split('; ');
        //     // console.log(userCredentials);
        //     let finalToken = userCredentials[0];
        
        //     // console.log("Our final token is: ", finalToken)
        // }












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

                                <Form.Group>
                                    <Form.Label>Vehicle Mileage</Form.Label>
                                    <Form.Control 
                                        type="text"
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
                                        type="text"
                                        placeholder="Estimated Cost of Repairs"
                                        value={this.state.estimatedCost}
                                        onChange={this.handleChange}
                                        name="estimatedCost"
                                    />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Case Number</Form.Label>
                                    <Form.Control 
                                        type="text"
                                        placeholder="Case Number"
                                        value={this.state.caseNumber}
                                        onChange={this.handleChange}
                                        name="caseNumber"
                                    />
                                </Form.Group>
                            </Form.Row>
                            {/* <Form.Row>
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
                            </Form.Row> */}
                            <Form.Row>
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