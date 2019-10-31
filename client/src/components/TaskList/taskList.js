import React, {Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../../frontend-assets/css/masterView.css';
import TaskItem from './TaskItem'

const data = {
    task:""
}

class TaskList extends Component {
    state = {
        task: "",
    }


    onSubmit = () => {
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


    render() {
        return (
         <div>
            <div className="row mb-5">
                <div className="col-md-12">
                    <form>
                        <div className="row">
                            <div className="col-md-9 col-sm-9 col-9">
                                <input type="text" className="form-control" placeholder="Add Your Task Here" value={this.state.task} onChange={(event) => this.handleInputChange(event)}/>
                            </div>
                            <div className="col-md-3 col-sm-3 col-3">
                                <button onClick = {this.onSubmit} className="btn btn-primary addNew">Add Task</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-md-7 padding-zero">
            {/* tasks list container */}
                <div className="task-list">
                    <fieldset style={{boxShadow: '0 0 14px 2px #afafaf', borderRadius: 5, padding: '0 10px'}}>
                        <legend style={{display: 'inline-block', backgroundColor: 'white', width: 'inherit',marginLeft: 10,padding: '0 10px'}}>Task List</legend>
                        {/* tasks start here */}
                        <div className="allTasks">
                            {/* task */}
                            <ul>
                            {/* <TaskItem description="Water plants"/>
                            <TaskItem description="Learned redux"/> */}
                            <TaskItem description={data.task}/>
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
                        