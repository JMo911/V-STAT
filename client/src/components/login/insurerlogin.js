import React, { Component } from "react";
import {
    Button,
    Card,
    Col,
    Form,
    Modal, 
    Row
    } from "react-bootstrap";
import './styles.css';

export function InsurerLogin() {

    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

        return (
            <div className="user-login-area" id="insurance-login-area">
            <Card.Body>
                <Form>
                        <Col>
                            <Form.Control placeholder="Insurance Company"/>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Insurance Employee ID #" />
                        </Col>
                        <Col>
                            <Button id="insurer-login-button">
                                Insurance Login
                            </Button>
                        </Col>
                </Form>

                {/* <Button variant="primary" onClick={handleShow}>
                    Launch demo modal
                </Button>

                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal> */}




            </Card.Body>
            </div>
        )
        }
export default InsurerLogin;