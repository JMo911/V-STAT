import React, { Component } from "react";
import {
  Container
} from "react-bootstrap";
import './styles.css';
// import '../../../public/assets/images/VSTAT-logo2.png'
import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap";
import posed from 'react-pose';
const axios = require('axios');
// import ReactDOM from 'react-dom';

const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.2,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
  },
  press: {
    scale: 1.1,
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
  }
});

// const imagePath = process.env.PUBLIC_URL + '/assets/images/'

class LoginPage extends Component {
  state = {
    buttonLabel: "Login",
    redirectURL: "/login",
    userTicketNumber: null
  }

  componentWillMount() {
    let cookie = document.cookie;
    // console.log("Our cookie is: ", document.cookie);
    cookie = cookie.split(', ');
    var result = {};

    for (var i = 0; i < cookie.length; i++) {
      var curSemiSplit = cookie[i].split(';');
      result[curSemiSplit[0]] = curSemiSplit[1];
      // console.log("curSemiSplit[0] is: ", curSemiSplit[0]);
      // console.log("curSemiSplit[1] is: ", curSemiSplit[1]);




        var cur = cookie[i].split('=');
        result[cur[0]] = cur[1];
        // console.log("cur[0] is: ", cur[0]);
        // console.log("cur[1] is: ", cur[1]);
    }
    if (result.token) {

    let token = result.token;
    // console.log(token);
    let finalToken;
    
    let userCredentials = token.split('; ');
    // console.log(userCredentials);
    finalToken = userCredentials[0];
  

    // console.log("Our final token is: ", finalToken)
    axios({
      method: "get",
      url: '/api/users/user-info',
      headers: {
        Authorization: "Bearer " + finalToken
      }
    })
    .then(response => {
      const userData = response.data;
      // this.setState({ userData:userInfoData })
      // console.log("Our user data is: ", userData);

      // console.log("Our user ID is: ", userData.id);
      // FIRST make an API call to the user info API, THEN use that result to populate res.data.id, below.
      const userType = userData.UserTypeId;

      this.setState({
        buttonLabel: "Take me to my portal"
      })

      axios({
        method: "get",
        url: '/api/users/' + userData.id + '/tickets',
        headers: {
          Authorization: "Bearer " + finalToken
        }
      })
        .then(response => {
          const userTicketNumber = response.data[0].Tickets[0].id;
          // console.log("userticketnumber:" , this.state.userTicketNumber)
            //   this.setState({ data:data })
            // window.location = "/MasterView/" + data;
            this.setState({ userTicketNumber:userTicketNumber })
          // console.log("this.state.data is: ", this.state.data);
          // console.log("this.state.data[0] is: ", this.state.data[0])
          // console.log("this.state.data[0].tickets is: ", this.state.data[0].tickets)
          // console.log("this. is: ", this.state.data[0].Tickets)
          if (userType === 1) {
            this.setState({
              redirectURL: "/MasterView/" + this.state.userTicketNumber
            })
            
          } else if (userType === 2) {
            this.setState({
              redirectURL: "/mechanic-splash"
            })
          } else if (userType === 3) {
            this.setState({
              redirectURL: "/insurance-splash"
            })
          }

        }).catch(function(error) {
          console.log(error);
        })
      
      
      




    }).catch(function(error) {
      console.log(error);
    })

    }

    




  }


  render() {
    return (
      <Container>
        <div id="loginArea">
          <img src="https://i.imgur.com/uSePAap.png" id="logo" alt="V-STAT!" />
          <p>Welcome to V-STAT!</p>
          <p>This program aims to take some of the confusion out of the car repair process, ensuring total transparency throughout every step of your journey. From the time a Customer gets into an accident, to the moment they pick up their fixed vehicle, V-STAT is there every step of the way. </p>
          <p>Whether you're an insurance agent, a mechanic, or a customer, V-STAT can help!</p>
          {/* <p>With V-STAT, get the STATus of your V-hicle, STAT!</p> */}
          <p>To begin, please select the Login button below.</p>
          <Link to={this.state.redirectURL}>
            <Box id="login-button">{this.state.buttonLabel}</Box>
          </Link>
        </div>
      </Container>
    )
  }
}
export default LoginPage;