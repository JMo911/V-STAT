import React, {Component} from 'react';
import '../../frontend-assets/css/masterView.css';
import {Button, Row, Col} from "react-bootstrap";

class TaskItem extends Component {
    render(){
        return(
            <div className="task">
                <Row>
                    {/* task detail */}
                    <Col md={7}>
                        <div className="taskName">
                            <p id="task-text">{this.props.description}</p>
                        </div>
                    </Col>
                    {/* actions container like yes, no */}
                    <Col md={5}>
                        <div className="actions">
                            {/* yes button */}
                            <Button 
                            onClick={this.props.handleCompletedTask} 
                            className="btn btn-success text-white" 
                            id="task-completed-button">
                                Complete Task
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default TaskItem;