import {Link} from 'react-router-dom';
import React from 'react';
import { Container, Row, Col,Card,Button } from 'react-bootstrap';


const InsuranceSplashScreen = (props) => {
    return (
            <Container>
                <Row className="MainCard" alignItems="center" flexCol>
                    <Col xs="8" className="offset-2">
                        <Card>
                            <Card.Header>Welcome</Card.Header>
                            <Card.Body>
                                <Card.Title>Select an Option</Card.Title>
                                <Card.Text>
                                    Create or view mechanic insurance tickets.
                                </Card.Text>
                                <Row>
                                    <Link to = "/insurance-ticket-view">
                                    <Col><Button variant="primary">View Tickets</Button></Col>
                                    </Link>
                                    <Col>
                                        <Link to = "/new-ticket">
                                            <Button id="ticket-button">Create New Ticket</Button>
                                        </Link> 
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
    );
}

export default InsuranceSplashScreen;