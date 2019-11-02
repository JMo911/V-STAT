import React, {Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../../frontend-assets/css/masterView.css';
import TaskList from '../TaskList/taskList';
import CompletedTask from '../CompletedTask/CompletedTask';
import Comment from '../Comments/Comment'
import TicketCard from '../MasterView/TicketCard';
import {Container, Row, Col} from "react-bootstrap";


class MasterView extends Component {

        state = { 
            completedTasks: [],
        }
        handleCompletedTask = (task) => { 
            const tasks = this.state.completedTasks.slice()
            tasks.push(task)
            this.setState({completedTasks:tasks})
    
        }
    render() {
        return (
            <Container id="ticket-view">
                <TicketCard/>

                <TaskList handleCompletedTask={this.handleCompletedTask}/>

                {/* <CompletedTask tasks={this.state.completedTasks}/> */}
                {/* <Comment/> */}
              
             
            </Container>
        );
    }
}

export default MasterView;