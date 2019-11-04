import React, {Component} from 'react';
import '../../frontend-assets/css/masterView.css';
import TaskList from '../TaskList/taskList';
import TicketCard from '../MasterView/TicketCard';
import {Container} from "react-bootstrap";

class MasterView extends Component {
    state = { 
        completedTasks: [],
    }
    handleCompletedTask = (task) => { 
        const tasks = this.state.completedTasks.slice()
        tasks.push(task)
        this.setState({completedTasks:tasks})
    }

    state = { 
        completedTasks: [],
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
        return (
            <Container id="ticket-view">
                <TicketCard/>

                <TaskList handleCompletedTask={this.handleCompletedTask}/>             
             
            </Container>
        )
    }
}

export default MasterView;