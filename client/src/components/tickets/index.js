import React, { Component } from "react";
import {
    Button,
    Col,  
    Container,
    Form,
    } from "react-bootstrap";
import {Link} from 'react-router-dom';
import './styles.css';

// import { connect } from "react-redux";
// import { createTicket } from "../../actions";



// export function NewTicket() {
class NewTicket extends Component {
        // console.log("Ticket View has been loaded!");
        constructor(props) {
            super(props);
            this.state = {
                // ticket: [
                //     vehicleMake = "",
                //     vehicleModel = "",
                //     vehicleYear = "",
                //     vehicleMileage = "",
                //     estimatedCost = "",
                //     caseNumber = "",
                //     approvalDate = "",
                //     customerNameFirst = "",
                //     customerNameLast = "",
                //     mechanicNameFirst = "",
                //     mechanicNameLast = "",
                //     mechanicShopName = "",
                //     insuranceNameFirst = "",
                //     insuranceNameLast = "",
                //     insuranceCompany = ""
                // ]
                vehicleMake: "",
                vehicleModel: "",
                vehicleYear: "",
                vehicleMileage: "",
                estimatedCost: "",
                caseNumber: "",
                approvalDate: "",
                customerNameFirst: "",
                customerNameLast: "",
                mechanicNameFirst: "",
                mechanicNameLast: "",
                mechanicShopName: "",
                insuranceNameFirst: "",
                insuranceNameLast: "",
                insuranceCompany: ""
                
            };
        
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
          }
        
          handleChange(event) {
            let name = event.target.name;
            this.setState({[name]: event.target.value});
          }
        
          handleSubmit(event) {
              console.log("Our state now contains...", this.state);
            alert(
                "Submitting...\n" +
                "Vehicle Make: " + this.state.vehicleMake + 
                "\n" + 
                "Vehicle Model: " + this.state.vehicleModel + 
                "\n" + 
                "Vehicle Year: " + this.state.vehicleYear + 
                "\n" + 
                "Vehicle Mileage: " + this.state.vehicleMileage + 
                "\n" + 
                "Estimated Cost of Repairs: " + this.state.estimatedCost + 
                "\n" + 
                "Case Number: " + this.state.caseNumber + 
                "\n" + 
                "Approved On: " + this.state.approvalDate + 
                "\n" + 
                "Customer: " + this.state.customerNameFirst + this.state.customerNameLast +  
                "\n" + 
                "Mechanic: " + this.state.mechanicNameFirst + this.state.mechanicNameLast + 
                "\n" + 
                "Body Shop: " + this.state.mechanicShopName + 
                "\n" + 
                "Insurance Agent: " + this.state.insuranceNameFirst + this.state.insuranceNameLast +  
                "\n" + 
                "Insurance Company: " + this.state.insuranceCompany
            );
            event.preventDefault();
          }


    render() {
      return (
        <Container>
                    <div id="mainArea">
                        <p>Create New Ticket</p>
                    </div>
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
                                    <Form.Label>Customer First Name</Form.Label>
                                    <Form.Control 
                                        type="text"
                                        placeholder="Customer First Name"
                                        value={this.state.customerNameFirst}
                                        onChange={this.handleChange}
                                        name="customerNameFirst"
                                    />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Customer Last Name</Form.Label>
                                    <Form.Control 
                                        type="text"
                                        placeholder="Customer Last Name"
                                        value={this.state.customerNameLast}
                                        onChange={this.handleChange}
                                        name="customerNameLast"
                                    />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Mechanic First Name</Form.Label>
                                    <Form.Control 
                                        type="text"
                                        placeholder="Mechanic First Name"
                                        value={this.state.mechanicNameFirst}
                                        onChange={this.handleChange}
                                        name="mechanicNameFirst"
                                    />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Mechanic Last Name</Form.Label>
                                    <Form.Control 
                                        type="text"
                                        placeholder="Mechanic Last Name"
                                        value={this.state.mechanicNameLast}
                                        onChange={this.handleChange}
                                        name="mechanicNameLast"
                                    />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Body Shop</Form.Label>
                                    <Form.Control 
                                        type="text"
                                        placeholder="Body Shop"
                                        value={this.state.mechanicShopName}
                                        onChange={this.handleChange}
                                        name="mechanicShopName"
                                    />
                                </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Insurance Agent First Name</Form.Label>
                                    <Form.Control 
                                        type="text"
                                        placeholder="Insurance Agent First Name"
                                        value={this.state.insuranceNameFirst}
                                        onChange={this.handleChange}
                                        name="insuranceNameFirst"
                                    />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Insurance Agent Last Name</Form.Label>
                                    <Form.Control 
                                        type="text"
                                        placeholder="Insurance Agent Last Name"
                                        value={this.state.insuranceNameLast}
                                        onChange={this.handleChange}
                                        name="insuranceNameLast"
                                    />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Insurance Company</Form.Label>
                                    <Form.Control 
                                        type="text"
                                        placeholder="Insurance Company"
                                        value={this.state.insuranceCompany}
                                        onChange={this.handleChange}
                                        name="insuranceCompany"
                                    />
                                </Form.Group>
                                </Form.Row>

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