import React, {Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../../frontend-assets/css/masterView.css';
import TaskItem from './TaskItem'
import CompletedTask from '../CompletedTask/CompletedTask';
import {Button, Col, Row} from "react-bootstrap";

// const data = {
//     task:""
// }
import Comment from '../Comments/Comment'

class TaskList extends Component {
    state = { 
        tasks: [],
        task: "",
        completedTasks: []
    }


    onSubmit = (event) => {
        event.preventDefault();
        const tasks = this.state.tasks.slice()
        tasks.push(this.state.task)
        this.setState({tasks:tasks, task:""})
        // alert("Task Added")
        
    }

    handleInputChange = (event) => { 
        this.setState({task: event.target.value})
        console.log(this.state.task);

    }

    addTask(event) {
        if (this.onSubmit.value !== "") {
            var newTask = {
                text: this.onSubmit.value,
                key: Date.now()
                
            };
        }
    }





    // handleCompletedTask = (task) => { 
    //     const tasks = this.state.completedTasks.slice()
    //     tasks.push(task)
    //     // this.setState({completedTasks:tasks})
    //     this.setState(previousState => ({
    //         completedTasks: previousState.completedTasks
    //     }))
    //     console.log("Our completed tasks are now...", this.state.completedTasks)
    // }

    completeTask = (event, task, i) => {
        event.preventDefault();
        const tasks = this.state.tasks.slice()
        const completedTasks = this.state.completedTasks.slice()
        tasks.splice(i, 1)

        completedTasks.push(task)

        this.setState({tasks:tasks, completedTasks:completedTasks})
        this.props.handleCompletedTask(task)
        console.log("Task completed!");
    }






    render() {
        return (
            <Row md={2}>
                <Col md={2}>
                    <form>
                        <Row>
                            <Col md={8} id="task-input-area">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Add Your Task Here" 
                                    value={this.state.task} 
                                    onChange={(event) => this.handleInputChange(event)}
                                    />
                            </Col>
                            <Row>
                                <div id="task-input-submit" className="col-md-3 col-sm-3 col-3">
                                    <Button onClick = {this.onSubmit} className="btn btn-primary addNew" id="add-task-button">Add Task</Button>
                                </div>
                            </Row>
                        </Row>
                    </form>
                </Col>
                <Col md={8}>
                {/* tasks list container */}
                    <div className="task-list">
                        <fieldset>
                            <legend id="task-list-header">Task List</legend>
                            {/* tasks start here */}
                            <div className="allTasks">
                                {/* task */}
                                <ul>
                                    {this.state.tasks.map((task, i) => (
                                        <TaskItem 
                                        key={i}
                                        description={task} 
                                        handleCompletedTask = {event=>this.completeTask(event, task, i)}
                                        />
                                    ))}
                                </ul>
                                
                            </div>
                        </fieldset>
                    </div>
                    <CompletedTask tasks={this.state.completedTasks}/>
                </Col>
                <Col md={2}>
                    <Comment/>
                </Col>
            </Row>         
        );
    }
}

    export default TaskList;
                        