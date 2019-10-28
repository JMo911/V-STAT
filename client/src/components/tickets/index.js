import React, { Component } from "react";
import {
    Button,
    Col,  
    Container,
    Form,
    } from "react-bootstrap";
import {Link} from 'react-router-dom';
import './styles.css';



class NewTicket extends Component {
    render() {
        console.log("Ticket View has been loaded!");
      return (
        <Container>
                    <div id="mainArea">
                        <p>Create New Ticket</p>
                    </div>
                    <div id="ticketInputArea">
                        
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Vehicle Make</Form.Label>
                                <Form.Control type="text" placeholder="Enter Vehicle Make" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Vehicle Model</Form.Label>
                                <Form.Control type="text" placeholder="Enter Vehicle Model" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Vehicle Year</Form.Label>
                                <Form.Control placeholder="Vehicle Year" />
                            </Form.Group>

                            <Form.Group controlId="formGridAddress2">
                                <Form.Label>Vehicle Mileage</Form.Label>
                                <Form.Control placeholder="Enter Vehicle Mileage" />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control as="select">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                                </Form.Group>
                            </Form.Row>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            <Link to = "/MasterView">
                                <Button variant="primary">View Ticket</Button>
                            </Link>
                        </Form>
                    </div>
                {/* </Col> */}
            {/* </Row> */}
        </Container>
      )
    }
}
export default NewTicket;