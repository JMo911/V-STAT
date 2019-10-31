import {Link} from 'react-router-dom';
import React from 'react';
import { Container, Row, Col,Card,Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';


const InsuranceSplashScreen = (props) => {
    return (
            <Container flex fullHeight className="container text-center" style={{position: 'relative', top: 170}} flexCol justifyContent="center">
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
                                    <Link to = "/MasterView">
                                    <Col><Button variant="primary">View Ticket</Button></Col>
                                    </Link>
                                    <Col><Button variant="primary">Create Ticket</Button> </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
    );
}

export default InsuranceSplashScreen;