import React, { Component } from 'react';
// import '../../frontend-assets/css/masterView.css';
import TaskItem from './TaskItem'
import CompletedTask from '../CompletedTask/CompletedTask';
import { Button, Col, Row } from "react-bootstrap";
import Comment from '../Comments/Comment';
import axios from 'axios';

class TaskList extends Component {
    state = {
        tasks: [],
        task: "",
        completedTasks: [],
        taskInputClass: "input-area-hide"
    }

    readTasks = () => {
        const ticketNumber = window.location.href[window.location.href.length - 1];
        let cookie = document.cookie;
        // console.log("Our cookie is: ", document.cookie);
        cookie = cookie.split(', ');
        var result = {};

        for (var i = 0; i < cookie.length; i++) {
            var curSemiSplit = cookie[i].split(';');
            result[curSemiSplit[0]] = curSemiSplit[1];
            var cur = cookie[i].split('=');
            result[cur[0]] = cur[1];
        }
        let token = result.token;
        // console.log(token);
        let userCredentials = token.split('; ');
        // console.log(userCredentials);
        let finalToken = userCredentials[0];
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
                const incompleteTasks = [];
                const completeTasks = [];
                data.forEach(element => {
                    console.log(element.completed);
                    if (element.completed) {
                        completeTasks.push(element)
                        console.log(element)
                    } else {
                        incompleteTasks.push(element)
                    }
                });
                this.setState({
                    tasks: incompleteTasks,
                    completedTasks: completeTasks
                });
                // console.log("TASK DATA",this.state.tasks)
                // this.setState({ data:data })
            }).catch(function (error) {
                console.log("error:", error);
            })
    }

    onSubmit = (event) => {
        event.preventDefault();
        // console.log("NEW TASK: ", newTask)
        const ticketNumber = window.location.href[window.location.href.length - 1];
        const newTask = {
            todo: this.state.task,
            completed: false,
            TicketId: ticketNumber
        }
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
        let token = result.token;
        // console.log(token);
        let userCredentials = token.split('; ');
        // console.log(userCredentials);
        let finalToken = userCredentials[0];

        // console.log("Our final token is: ", finalToken)


        axios({
            method: "post",
            url: '/api/tasks',
            headers: {
                Authorization: "Bearer " + finalToken
            },
            data: newTask
        })
            .then(response => {
                // console.log("task created")

                this.readTasks();
            })
            .catch(error => {
                console.log(error);
            })




        const tasks = this.state.tasks.slice()
        tasks.push(this.state.task)
        this.setState({ tasks: tasks, task: "" })
        // alert("Task Added")

    }

    handleInputChange = (event) => {
        this.setState({ task: event.target.value })
        // console.log(this.state.task);

    }

    addTask(event) {
        if (this.onSubmit.value !== "") {
            // var newTask = {
            //     text: this.onSubmit.value,
            //     key: Date.now()

            // };
        }
    }

    completeTask = (event, id, completed, todo) => {
        // event.preventDefault();
        // console.log(id, "Todo: " + todo + "completed: " + completed)
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
        const updatedTask = {
            completed: true
        }

        axios({
            method: "put",
            url: '/api/tasks/' + id,
            data: updatedTask,
            headers: {
                Authorization: "Bearer " + finalToken
            }
        })
            .then(response => {
                const data = response.data;
                // console.log(data)
                // this.setState({updated: this.state.updated+1})
                // console.log("TASK DATA",this.state.tasks)
                // this.setState({ data:data })
                this.readTasks();
            }).catch(function (error) {
                console.log("error:", error);
            })

    }

    componentWillMount() {
        let cookie = document.cookie;
        cookie = cookie.split('; ');
        let userId = cookie[0].split('=');
        let finalUserId = userId[1];
        let userTypeId;
        console.log("The cookie is: ",cookie);


        if (cookie[2] === "userTypeId=2") {

            this.setState({taskInputClass: "input-area-show"})

        } 


        var result = {};
        for (var i = 0; i < cookie.length; i++) {
            var cur = cookie[i].split('=');
            result[cur[0]] = cur[1];
        }
        let token = result.token;
        let userCredentials = token.split('; ');
        let finalToken = userCredentials[0];
        const ticketNumber = window.location.href[window.location.href.length - 1];
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
                const incompleteTasks = [];
                const completeTasks = [];

           

                data.forEach(element => {
                    // console.log(element.completed);
                    if (element.completed) {
                        completeTasks.push(element)
                        // console.log(element)
                    } else {
                        incompleteTasks.push(element)
                    }
                });
                this.setState({
                    tasks: incompleteTasks,
                    completedTasks: completeTasks
                });
                // console.log("TASK DATA",this.state.tasks)
                // this.setState({ data:data })
            }).catch(function (error) {
                console.log("error:", error);
            })
        // console.log(this.state.completedTasks)
    }

    renderTaskMaker = () => {

    }
    


    render() {

        const componentInputClass = this.state.taskInputClass;



        return (
            <Row md={2}>
                <Col md={2}>

                    <form className={this.state.taskInputClass}>
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
                                    <Button onClick={this.onSubmit} className="btn btn-primary addNew" id="add-task-button">Add Task</Button>
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
                                            dataClass={componentInputClass}
                                            completed={tasks.completed}
                                            handleCompletedTask={(event, key) => this.completeTask(event, tasks.id, tasks.completed, tasks.todo)}
                                        />
                                    ))}
                                </ul>

                            </div>
                        </fieldset>
                    </div>
                    <CompletedTask completedTasks={this.state.completedTasks} />
                </Col>
                <Col md={2}>
                    <Comment />
                </Col>
            </Row>
        );
    }
}

export default TaskList;
