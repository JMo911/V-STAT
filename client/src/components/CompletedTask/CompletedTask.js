import React from 'react';
import '../../frontend-assets/css/masterView.css';
import TaskItem from '../TaskList/TaskItem'
   
export function CompletedTask(props) {
    console.log(props.tasks);
    return (
        <div className="completed-tasks">
            <fieldset id="task-area">
                <legend id="completed-tasks-header">Completed Tasks</legend>
                    {/* completed tasks will appear here*/}
                    <ol className="taskName pl-4" style={{lineHeight: 1.0}}>
                        <ul>
                        {props.completedTasks.map((tasks) => (
                                        <TaskItem 
                                        key={tasks.id}
                                        todo={tasks.todo} 
                                        completed={tasks.completed}
                                        />
                                    ))}
                        </ul>                         
                    </ol>
            </fieldset>
        </div>
    );
}

export default CompletedTask;


