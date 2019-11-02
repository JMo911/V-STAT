import React, {Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../../frontend-assets/css/masterView.css';
import TaskItem from '../TaskList/TaskItem'

   
class CompletedTask extends Component {


render() {
    return (

<div className="completed-tasks">
    <fieldset id="task-area">
        <legend id="completed-tasks-header">Completed Tasks</legend>
                        {/* completed tasks will appear here*/}
                        <ol className="taskName pl-4" style={{lineHeight: 1.0}}>
                         <ul>
                            {this.props.tasks.map(task => (      
                                    // <TaskItem description={task}/>
                                    <div>
                                        {task}
                                    </div>
                                ))}
                        </ul>

                        
                        {/* <li style={{fontSize: 15}}></li> */}

                         
                        </ol>
    </fieldset>
</div>
    );
    }
}

export default CompletedTask;


