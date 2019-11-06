import React, {Component} from 'react';
import '../../frontend-assets/css/masterView.css';
import TaskItem from './TaskItem'
import CompletedTask from '../CompletedTask/CompletedTask';
import {Button, Col, Row} from "react-bootstrap";
import Comment from '../Comments/Comment';
import axios from 'axios';

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
            // var newTask = {
            //     text: this.onSubmit.value,
            //     key: Date.now()
                
            // };
        }
    }

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
        const ticketNumber = window.location.href[window.location.href.length -1];
        axios({
            method: "get",
            url: '/api/tickets/' + ticketNumber + "/tasks",
            headers: {
              Authorization: "Bearer " + finalToken
            }
          })
          .then(response => {
            const data = response.data[0].Tasks;
            // console.log("TASK DATA",data)
            this.setState({tasks:data})
            console.log("TASK DATA",this.state.tasks)
            // this.setState({ data:data })
          }).catch(function(error) {
            console.log("error:", error);
          })
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
                                    {this.state.tasks.map((tasks) => (
                                        <TaskItem 
                                        key={tasks.id}
                                        todo={tasks.todo} 
                                        completed={tasks.completed}
                                        handleCompletedTask = {event=>this.completeTask(event)}
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
                        