import {React, Component} from "react";
import {
    Button,
    Card,
    Col,  
    Form,
    Tab,
    Tabs
    } from "react-bootstrap";
    import {Link} from 'react-router-dom';
import './styles.css';
import CustomerSignup from "../signup/customersignup";

class CustomerLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customerUsername: "",
            customerPassword: ""
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
            "Username: " + this.state.customerUsername +
            "\n" +
            "Password: " + this.state.customerPassword
        );
        event.preventDefault();
      }



    render() {
        return (
            <div id="customer-login">
                <Card.Body>
                    <Tabs defaultActiveKey="Login" transition={false} id="noanim-tab-example">
                        <Tab eventKey="Login" title="Log in">
                            <Form onSubmit={this.handleSubmit}>
                                <Col>
                                    <Form.Control 
                                        id="customer-username-submit"
                                        value={this.state.customerUsername} 
                                        onChange={this.handleChange}
                                        name="customerUsername"
                                        placeholder="Enter Username" 
                                    />
                                </Col>
                                <Col>
                                    <Form.Control 
                                        id="customer-password-submit" 
                                        value={this.state.customerPassword} 
                                        onChange={this.handleChange}
                                        name="customerPassword"
                                        placeholder="Enter Password" 
                                    />
                                </Col>
                                <Col>
                                    <Button id="user-login-button" type="submit">Create User</Button>
                                </Col>
                            </Form>
                        </Tab>
                        <Tab eventKey="Signup" title="Sign Up">
                            <CustomerSignup />
                        </Tab>
                    </Tabs>
                </Card.Body>
            </div>
        )
    }
}
export default CustomerLogin;