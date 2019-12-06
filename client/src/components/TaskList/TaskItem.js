import React, { Component } from 'react';
// import '../../frontend-assets/css/masterView.css';
import { Button, Row, Col } from "react-bootstrap";

class TaskItem extends Component {

    render() {
        return (
            <div className="task">
                <Row>
                    {/* task detail */}
                    <Col md={7}>
                        <div className="taskName">
                            <p id="task-text">{this.props.todo}</p>
                        </div>
                    </Col>
                    {/* actions container like yes, no */}
                    <Col md={5}>
                        <div className="actions">
                            {/* yes button */}
                            {(!this.props.completed) ?
                                <Button
                                    onClick={this.props.handleCompletedTask}
                                    // className="btn btn-success text-white"
                                    className={"btn btn-success "+ this.props.dataClass}
                                    id="task-completed-button">
                                    Complete Task
                            </Button> : <div></div>
                            }

                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default TaskItem;