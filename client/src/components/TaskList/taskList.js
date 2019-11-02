import React, {Component} from 'react';
import '../../frontend-assets/css/masterView.css';
import TaskItem from './TaskItem'



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
            // var newTask = {
            //     text: this.onSubmit.value,
            //     key: Date.now()
                
            // };
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
         <div>
            <div className="row mb-6">
                <div className="col-md-20">
                    <form>
                        <div className="row">
                            <div className="col-md-10 col-sm-10 col-10">
                                <input type="text" className="form-control" placeholder="Add Your Task Here" value={this.state.task} onChange={(event) => this.handleInputChange(event)}/>
                            </div>
                            <div className="col-md-10 col-sm-3 col-3">
                                <button onClick = {this.onSubmit} className="btn btn-primary addNew">Add Task</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-md-15 padding-zero">
            {/* tasks list container */}
                <div className="task-list">
                    <fieldset style={{boxShadow: '0 0 14px 2px #afafaf', borderRadius: 5, padding: '10 10px'}}>
                        <legend style={{display: 'inline-block', backgroundColor: 'white', width: 'inherit',marginLeft: 10,padding: '0 10px'}}>Task List</legend>
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
        </div>           
                                   );
                                }
                            }

    export default TaskList;
                        