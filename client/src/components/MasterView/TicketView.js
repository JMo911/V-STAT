import React, {Component} from 'react';
import '../../frontend-assets/css/masterView.css';
import TaskList from '../TaskList/taskList';
import TicketCard from '../MasterView/TicketCard';
import {Container} from "react-bootstrap";
import axios from "axios";

class MasterView extends Component {
    state = { 
        completedTasks: [],
        data:[],
        userId: ""
    }
    handleCompletedTask = (task) => { 
        const tasks = this.state.completedTasks.slice()
        tasks.push(task)
        this.setState({completedTasks:tasks})
    }



    async componentWillMount() {
        let cookie = document.cookie;
        cookie = cookie.split('; ');
        let userId = cookie[0].split('=');
        let finalUserId = userId[1];

        console.log("our real user ID is: " + finalUserId);

        var result = {};
        for (var i = 0; i < cookie.length; i++) {
            var cur = cookie[i].split('=');
            result[cur[0]] = cur[1];
        }
        let token = result.token;
        let userCredentials = token.split('; ');
        let finalToken = userCredentials[0];
        console.log("the finalToken is: " + finalToken);
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
        {if (this.state.data.length > 1) {
            return (
                <Container id="ticket-view">
                    {console.log("We are passing down... ", this.state.data)}
                    <TicketCard props={this.state.data}/>
    
                    <TaskList handleCompletedTask={this.handleCompletedTask}/>             
                 
                </Container>
            )
        } else {
            return (<div></div>);
        }
    }
    }
}

export default MasterView;