import {Link} from 'react-router-dom';
import React from 'react';
import { Container, Row, Col,Card,Button,CardHeader,CardBody,CardTitle,CardText } from 'reactstrap';
import { withRouter } from 'react-router-dom';


const InsuranceSplashScreen = (props) => {
    return (
            <Container flex fullHeight className="container text-center" style={{position: 'relative', top: 170}} flexCol justifyContent="center">
                <Row className="MainCard" alignItems="center" flexCol>
                    <Col xs="8" className="offset-2">
                        <Card>
                            <CardHeader>Welcome</CardHeader>
                            <CardBody>
                                <CardTitle>Select an Option</CardTitle>
                                <CardText>
                                    Create or view mechanic insurance tickets.
                                </CardText>
                                <Row>
                                    <Link to = "/MasterView">
                                    <Col><Button variant="primary">View Ticket</Button></Col>
                                    </Link>
                                    <Col><Button variant="primary">Create Ticket</Button> </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
    );
}

export default InsuranceSplashScreen;