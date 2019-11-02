import React, { Component } from "react";
import {
    Button,
    Col,  
    Container,
    Form,
    } from "react-bootstrap";
import {Link} from 'react-router-dom';
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
                // approvalDate: "",
                // estimatedCompletionDate: "",
                // customerNameFirst: "",
                // customerNameLast: "",
                // mechanicNameFirst: "",
                // mechanicNameLast: "",
                // mechanicShopName: "",
                // insuranceNameFirst: "",
                // insuranceNameLast: "",
                // insuranceCompany: ""
                
            };
        
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
          }
        
          handleChange(event) {
            let name = event.target.name;
            this.setState({[name]: event.target.value});
          }
        
          handleSubmit(event) {
            const newTicket = {
                vehicleMake: this.state.vehicleMake,
                vehicleModel: this.state.vehicleModel,
                vehicleYear: this.state.vehicleYear,
                vehicleMileage: this.state.vehicleMileage,
                estimatedCost: this.state.estimatedCost,
                caseNumber: this.state.caseNumber,
                // approvalDate: this.state.approvalDate,
                // estimatedCompletionDate: this.state.estimatedCompletionDate,
                // customerNameFirst: this.state.customerNameFirst,
                // customerNameLast: this.state.customerNameLast,
                // mechanicNameFirst: this.state.mechanicNameFirst,
                // mechanicNameLast: this.state.mechanicNameLast,
                // mechanicShopName: this.state.mechanicShopName,
                // insuranceNameFirst: this.state.insuranceNameFirst,
                // insuranceNameLast: this.state.insuranceNameLast,
                // insuranceCompany: this.state.insuranceCompany
            }
            axios.post('/api/tickets', newTicket)
                .then(function (response) {
                    console.log(response)
                })
                .catch(function (error) {
                    console.log(error);
                }); event.preventDefault();
            //   console.log("Our state now contains...", this.state);
            // alert(
            //     "Submitting...\n" +
            //     "Vehicle Make: " + this.state.vehicleMake + 
            //     "\n" + 
            //     "Vehicle Model: " + this.state.vehicleModel + 
            //     "\n" + 
            //     "Vehicle Year: " + this.state.vehicleYear + 
            //     "\n" + 
            //     "Vehicle Mileage: " + this.state.vehicleMileage + 
            //     "\n" + 
            //     "Estimated Cost of Repairs: " + this.state.estimatedCost + 
            //     "\n" + 
            //     "Case Number: " + this.state.caseNumber + 
            //     "\n" + 
            //     "Approved On: " + this.state.approvalDate + 
            //     "\n" + 
            //     "Customer Username: " + this.state.customerUsername + 
            //     "\n" + 
            //     "Mechanic: " + this.state.mechanicUsername

            // );
            // event.preventDefault();
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
                            <Form.Row>
                                {/* <Form.Group as={Col}>
                                    <Form.Label>Body Shop</Form.Label>
                                    <Form.Control 
                                        type="text"
                                        placeholder="Body Shop"
                                        value={this.state.mechanicShopName}
                                        onChange={this.handleChange}
                                        name="mechanicShopName"
                                    />
                                </Form.Group> */}
                                </Form.Row>
                                {/* <Form.Row> */}
                                {/* <Form.Group as={Col}>
                                    <Form.Label>Insurance Company</Form.Label>
                                    <Form.Control 
                                        type="text"
                                        placeholder="Insurance Company"
                                        value={this.state.insuranceCompany}
                                        onChange={this.handleChange}
                                        name="insuranceCompany"
                                    />
                                </Form.Group> */}
                                {/* </Form.Row> */}

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            <Link to = "/MasterView">
                                <Button variant="primary">View Ticket</Button>
                            </Link>
                                {/* <Button variant="primary" onClick={this.createTicket}>Make New Test Ticket</Button> */}
                        </Form>
                    </div>
        </Container>
      )
    }
}

// const mapStateToProps = (state) => {
//     return {
//       data:state.data
//     }
//   }
  
//   const mapDispatchToProps = {
//     createTicket
//   }
  
// export default connect(mapStateToProps, mapDispatchToProps)(NewTicket);

export default NewTicket;