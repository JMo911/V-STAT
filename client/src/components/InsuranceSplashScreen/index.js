import {Link} from 'react-router-dom';
import React, { Component } from "react";
import { Container, Row, Col,Card,Button } from 'react-bootstrap';

class InsuranceSplashScreen extends Component {
    logOut = () => {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "userTypeId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        function reroutetologin() {
          window.location = "/"
        }
        setTimeout(reroutetologin, 1000);
      }

render() {
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
                                    <Col>
                                    <Button variant="danger" onClick={() => this.logOut()}>Log out</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
            </Container>
    );
}
}

export default InsuranceSplashScreen;