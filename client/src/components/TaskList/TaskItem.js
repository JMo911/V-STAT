import React, {Component} from 'react';
import '../../frontend-assets/css/masterView.css';

class TaskItem extends Component {
    render(){
        return(

<div className="task">
    <div className="row">
        {/* task detail */}
        <div className="col-md-7 col-sm-7 col-7 pr-0">
            <div className="taskName">
                <p style={{fontSize: 14}}>{this.props.description}</p>
            </div>
        </div>
        {/* actions container like yes, no */}
        <div className="col-md-5 col-sm-5 col-5 p-0">
            <div className="actions" style={{marginTop: 5}}>
                {/* yes button */}
                <button onClick={this.props.handleCompletedTask} className="btn btn-success text-white" style={{padding: '4px 11px'}}>Y</button>
            </div>
        </div>
    </div>
</div>
        )
    }
}
export default TaskItem;