import React, { Component } from "react";
import {
    Accordion, 
    Button,
    Card,
    Col,  
    Container,
    Form,
    Control, 
    Row
    } from "react-bootstrap";
import './styles.css';



class LoginPage extends Component {
    render() {
      return (
        <Container>
            <Row>
                <Col md={9}>
                    <div id="mainArea">
                        <img src="https://via.placeholder.com/600x300.png"/>
                        <p>Welcome to V-STAT!</p>
                        <p>This program aims to take some of the confusion out of the car repair process, ensuring total transparency throughout every step of your journey. From the time a Customer gets into an accident, to the moment they pick up their fixed vehicle, V-STAT is there every step of the way. </p>
                        <p>With V-STAT, get the STATus of your V-hicle, STAT!</p>

                        <p>To begin, please select your Login type, whether you are an INSURANCE AGENT, a MECHANIC, or the CUSTOMER.</p>
                    </div>
                    
                </Col>
                <Col md={3}>
                    <div id="loginBox">
                        
                        
                        

                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Insurance Agent Login
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Form>
                                            <Row>
                                                <Col>
                                                    <Form.Control placeholder="Insurance Company" />
                                                </Col>
                                                <Col>
                                                    <Form.Control placeholder="Insurance Employee ID #" />
                                                </Col>
                                                <Col>
                                                    <Button id="insurerLoginButton">Insurance Agent Login</Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        Mechanic Login
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <Form>
                                            <Row>
                                                <Col>
                                                    <Form.Control placeholder="Mechanic Shop" />
                                                </Col>
                                                <Col>
                                                    <Form.Control placeholder="Shop Password" />
                                                </Col>
                                                <Col>
                                                    <Button id="mechanicLoginButton">Mechanic Login</Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                        Customer Login
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <Form>
                                            <Row>
                                                <Col>
                                                    <Form.Control placeholder="Last Name" />
                                                </Col>
                                                <Col>
                                                    <Form.Control placeholder="Ticket #" />
                                                </Col>
                                                <Col>
                                                    <Button id="customerLoginButton">Customer Login</Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        
                    </div>
                </Col>
            </Row>
        </Container>
      )
    }
}
export default LoginPage;









const rootElement = document.getElementById('root');
// ReactDOM.render(<Example />, rootElement);