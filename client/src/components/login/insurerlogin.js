import React from "react";
import {
    Button,
    Card,
    Col,
    Form,
    Tab,
    Tabs
    } from "react-bootstrap";
import './styles.css';
import {Link} from "react-router-dom";
import InsurerSignup from "../signup/insurersignup";

export function InsurerLogin() {

    return (
        <div className="user-login-area" id="insurance-login-area">
            <Card.Body>
            <Tabs defaultActiveKey="Login" transition={false} id="noanim-tab-example">
                <Tab eventKey="Login" title="Log In">
                    <Form>
                        <Col>
                            <Form.Control placeholder="Insurance Company" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Agent ID #" />
                        </Col>
                        <Col>
                            <Button id="insurer-login-button" class="signup-button">Insurer Login</Button>
                        </Col>
                    </Form>
                </Tab>
                <Tab eventKey="Signup" title="Sign Up">
                    <InsurerSignup />
                </Tab>
            </Tabs>

                <Link to = "/InsuranceSplash">
                    <Button id="insurance-splash-button">Insurance Splash</Button>
                </Link> 




            </Card.Body>
        </div>
    )
}
export default InsurerLogin;