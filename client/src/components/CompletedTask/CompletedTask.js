import React, {Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../../frontend-assets/css/masterView.css';
import TaskItem from '../TaskList/TaskItem'

   
class CompletedTask extends Component {


render() {
    return (
<div className="col-md-16 padding-zero">
<div className="completed-tasks">
    <fieldset style={{boxShadow: '0 0 10px 2px #afafaf', borderRadius: 5, padding: '0 10px'}}>
        <legend style={{display: 'inline-block', backgroundColor: 'white', width: 'inherit',marginLeft: 10,padding: '0 10px'}}>Completed Tasks</legend>
        <div className="allTasks">
            <div className="task">
                <div className="row">
                    <div className="col-md-12">
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
                    </div>
                </div>
            </div>
        </div>
    </fieldset>
</div>
</div>
    );
    }
}

export default CompletedTask;


