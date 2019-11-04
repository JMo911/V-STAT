import React, {Component} from 'react';
import '../../frontend-assets/css/masterView.css';
   
// class CompletedTask extends Component {
export function CompletedTask(props) {
    console.log(props.tasks);
    return (
        <div className="completed-tasks">
            <fieldset id="task-area">
                <legend id="completed-tasks-header">Completed Tasks</legend>
                    {/* completed tasks will appear here*/}
                    <ol className="taskName pl-4" style={{lineHeight: 1.0}}>
                        <ul>
                            {props.tasks.map((task, i) => (      
                                // <TaskItem description={task}/>
                                <div key={i}>
                                    {task}
                                </div>
                            ))}
                        </ul>                         
                    </ol>
            </fieldset>
        </div>
    );
}

export default CompletedTask;


