import React, {Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../../frontend-assets/css/masterView.css';
import TaskItem from './TaskItem'

// const data = {
//     task:""
// }
import Comment from '../Comments/Comment'

class TaskList extends Component {
    state = { 
        tasks: [],
        task: "",
    }


    onSubmit = (event) => {
        event.preventDefault();
        const tasks = this.state.tasks.slice()
        tasks.push(this.state.task)
        this.setState({tasks:tasks, task:""})
        alert("Task Added")
        
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

    completeTask = (event, task, i) => {
        event.preventDefault();
        const tasks = this.state.tasks.slice()
        tasks.splice(i, 1)
        this.setState({tasks:tasks})
        this.props.handleCompletedTask(task)
    }

    render() {
        return (
         <div className="row">
                <div className="col-md-2">
                    <form>
                        <div className="row">
                            <div id="task-input-area" className="col-md-9 col-sm-9 col-9">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Add Your Task Here" 
                                    value={this.state.task} 
                                    onChange={(event) => this.handleInputChange(event)}
                                    />
                            </div>
                            </div>
                            <div className="row">
                            <div id="task-input-submit" className="col-md-3 col-sm-3 col-3">
                                <button onClick = {this.onSubmit} className="btn btn-primary addNew">Add Task</button>
                            </div>
                        </div>
                    </form>
                </div>
            <div className="col-md-8 padding-zero">
            {/* tasks list container */}
                <div className="task-list">
                    <fieldset>
                        <legend id="task-list-header">Task List</legend>
                        {/* tasks start here */}
                        <div className="allTasks">
                            {/* task */}
                            <ul>
                                {this.state.tasks.map((task, i) => (
                                    <TaskItem description={task} handleCompletedTask= {event=>this.completeTask(event, task, i)}/>
                                ))}
                            </ul>
                            
                        </div>
                    </fieldset>
                </div>
            </div>
            <Comment/>
        </div>           
                                   );
                                }
                            }

    export default TaskList;
                        