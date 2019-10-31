import React, {Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../../frontend-assets/css/masterView.css';

const TaskItem = props => (
    <div className="task">
    <div className="row">
        {/* task detail */}
        <div className="col-md-7 col-sm-7 col-7 pr-0">
            <div className="taskName">
                <p style={{fontSize: 14}}>{props.description}</p>
            </div>
        </div>
        {/* actions container like yes, no */}
        <div className="col-md-5 col-sm-5 col-5 p-0">
            <div className="actions" style={{marginTop: 5}}>
                {/* yes button */}
                <button className="btn btn-success text-white" style={{padding: '4px 11px'}}>Y</button>
                {/* no button */}
                {/* <button className="btn btn-danger text-white" style={{marginLeft: 5}}>N</button> */}
                {/* contact button */}
                {/* <button className="btn btn-info" style={{marginLeft: 5}}>Contact</button> */}
            </div>
        </div>
    </div>
</div>
)

export default TaskItem;