import React, {Component, useEffect} from 'react';
// import '../../frontend-assets/css/masterView.css';
import TaskList from '../TaskList/taskList';
import TicketCard from './TicketCard';
import {Container, Button, Col, Row} from "react-bootstrap";
import axios from "axios";
import Comment from '../Comments/Comment';

class MasterView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completedTasks: [],
            data:[],
            userId: "",
            caseNumber: props.match.caseNumber,
            ticket: {}
        }
    }
    logOut = () => {
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "userTypeId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      function reroutetologin() {
        window.location = "/"
      }
      setTimeout(reroutetologin, 1000);
    }

    handleCompletedTask = (task) => { 
        const tasks = this.state.completedTasks.slice()
        tasks.push(task)
        this.setState({completedTasks:tasks})
    }

    // useEffect( () => {
    //     fetchTicket();
    //     console.log(this.state.caseNumber)
    // }, [])

    componentWillMount() {
        let cookie = document.cookie;
        cookie = cookie.split('; ');
        let userId = cookie[0].split('=');
        let finalUserId = userId[1];

        // console.log("our real user ID is: " + finalUserId);

        var result = {};
        for (var i = 0; i < cookie.length; i++) {
            var cur = cookie[i].split('=');
            result[cur[0]] = cur[1];
        }
        let token = result.token;
        let userCredentials = token.split('; ');
        let finalToken = userCredentials[0];
        // console.log("the finalToken is: " + finalToken);
        this.setState({userId:finalUserId});
        axios({
          method: "get",
          url: '/api/users/' + this.state.userId,
          headers: {
            Authorization: "Bearer " + finalToken
          }
        })
        .then(response => {
          const data = response.data;
          this.setState({ data:data })
        }).catch(function(error) {
          console.log("error:", error);
        })
        // var lastChar = this.state.caseNumber[this.state.caseNumber.length -1];
        const ticketNumber = window.location.href[window.location.href.length -1];
        axios({
            method: "get",
            url: '/api/tickets/' + ticketNumber,
            headers: {
              Authorization: "Bearer " + finalToken
            }
          })
          .then(response => {
            //   console.log(response.data)
              this.setState({ticket : response.data})
              // console.log("this.state.ticket = : ", this.state.ticket)
            // const data = response.data;
            // console.log("this is our ticket data: " + response)
            // this.setState({ data:data })
          }).catch(function(error) {
            console.log("error:", error);
          })
      }

    handleCompletedTask = (task) => { 
        const tasks = this.state.completedTasks.slice()
        tasks.push(task)
        // console.log("Our tasks is: ", tasks);
        // this.setState({completedTasks:tasks})
        this.setState(previousState => ({
            completedTasks: previousState.completedTasks
        }))

    }
    onStateChange




    render() {
        // {if (this.state.data.length > 1) {
            return (
                <Container id="ticket-view">
                  <Button variant="danger" onClick={() => this.logOut()}>Log out</Button>
                    {/* {console.log("We are passing down... ", this.state.data, this.state.ticket)} */}
                    <TicketCard 
                    key={this.state.ticket.caseNumber}
                    caseNumber={this.state.ticket.caseNumber}
                    estimatedCost={this.state.ticket.estimatedCost}
                    approvalDate={this.state.ticket.approvalDate}
                    vehicleMake={this.state.ticket.vehicleMake}
                    vehicleModel={this.state.ticket.vehicleModel}
                    vehicleYear={this.state.ticket.vehicleYear}
                    vehicleMileage={this.state.ticket.vehicleMileage}
                    // customerNameFirst={data.customerNameFirst}
                    // customerNameLast={data.customerNameLast}
                    // mechanicNameFirst={data.mechanicNameFirst}
                    // mechanicNameLast={data.mechanicNameLast}
                    // mechanicShopName={data.mechanicShopName}
                    // insuranceNameFirst={data.insuranceNameFirst}
                    // insuranceNameLast={data.insuranceNameLast}
                    // insuranceCompany={data.insuranceCompany}
                    />
           
    
                    <TaskList handleCompletedTask={this.handleCompletedTask}/>          
                    TEST   
                    <Col md={2}>
                      <div id="comment-zone">
                      <Comment />
                      </div>
                    </Col>
                </Container>
                
            )
        // } else {
        //     return (<div></div>);
        // }
    // }
    }
}

export default MasterView;