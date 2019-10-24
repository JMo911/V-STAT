import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Cookies from 'universal-cookie';

class LoginForm extends Component {
    state = {
        username: '',
        password: ''
    }

    cookies = new Cookies();

    constructor(props) {
        super(props);
    }

    loginSubmit = (event) => {
        event.preventDefault();
        this.setState({
            "username": event.currentTarget.username,
            "password": event.currentTarget.password
        });
        axios.post('/api/auth', {
            'username': this.state.username,
            'password': this.state.password
        }).then((response) => {
            this.cookies.set('token', response.data.token);
        });
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({[name]: value});
    }

    render() {
        return (
            <div className="row">
                <div className="col-8 offset-2">
                    <form>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" name="username" id="username" onChange={this.handleChange} value={this.state.username}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Username</label>
                            <input type="password" className="form-control" name="password" id="password" onChange={this.handleChange} value={this.state.password}/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.loginSubmit}> Submit </button>
                    </form>
                </div>
            </div>
    )
        ;
    }
}

LoginForm.propTypes = {};

export default LoginForm;
