import React, {Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../../frontend-assets/css/masterView.css';
import TaskList from '../TaskList/taskList';
import Comment from '../Comments/Comment'
import CompletedTask from '../CompletedTask/CompletedTask'

class MasterView extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="master-view" className="mt-5 mb-5">
                    <div className="container">
                        <div className="row" style={{boxShadow: '0 0 9px 2px #a0a0a0', padding: '30px 5px 5px 25px'}}>
                            <div className="col-md-6">
                                {/* details headings like model, maker etc */}
                                <div className="details row">
                                    <div className="detail-headings col-md-5 col-sm-6 col-6 pr-0">
                                        <div className="make">
                                            <h6 className="d-inline-block">Make: </h6>
                                        </div>
                                        <div className="model">
                                            <h6 className="d-inline-block">Model: </h6>
                                        </div>
                                        <div className="year">
                                            <h6 className="d-inline-block">Year: </h6>
                                        </div>
                                        <div className="mileage">
                                            <h6 className="d-inline-block">Mileage: </h6>
                                        </div>
                                        <div className="costOfRepairs">
                                            <h6 className="d-inline-block">Cost Of Repairs: </h6>
                                        </div>
                                        <div className="completionDate">
                                            <h6 className="d-inline-block">Estimated Completion Date: </h6>
                                        </div>
                                    </div>
                                    {/* details of the caar like toyota, 2018. The info shoetc*/}
                                    <div className="detail-values col-md-6 col-sm-6 col-6 pl-0">
                                        <p>Toyota</p>
                                        <p>Camry</p>
                                        <p>2019</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row details">
                                    {/* details headings like contacts etc */}
                                    <div className="col-md-5 col-sm-6 col-6 pr-0">
                                        <div className="ticket" style={{marginTop: 60}}>
                                            <h6 style={{marginBottom: 69}}>Your Ticket: </h6>
                                            <h6>Insurer Contact: </h6>
                                            <h6>Mechanic Contact: </h6>
                                            <h6>Customer Contact: </h6>
                                        </div>
                                    </div>
                                    {/* details headings like mobile numbers etc */}
                                    <div className="col-md-6 col-sm-6 col-6 pl-0 detail-values">
                                        <img src={require('../../frontend-assets/images/1.jpg')} alt="your ticket here" style={{width: '60%', marginBottom: 15}}/>
                                        <p>555-444-6666</p>
                                        <p>555-555-5555</p>
                                        <p>555-333-4444</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-md-9">
                                {/* input field to enter the new task*/}
                                {/* <div className="row mb-5">
                                    <div className="col-md-12">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-9 col-sm-9 col-9">
                                                    <input type="text" className="form-control" placeholder="Add Your Task Here"/>
                                                </div>
                                                <div className="col-md-3 col-sm-3 col-3">
                                                    <button className="btn btn-primary addNew">Add Task</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div> */}
                                <div className="row">
                            <TaskList/>
                           

                                 
                                    {/* completed tasks container */}
                                    <div className="col-md-5 padding-zero">
                                        <div className="completed-tasks">
                                        <CompletedTask/>

                                      
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* comments section start here*/}
                            <div className="col-md-3 padding-zero comment-container" style={{marginTop: 105}}>
                                <div className="comments">

                                <Comment/>
                                

                                    {/* showing all comments here*/}
                                 
                                    {/* writing comment here*/}
                                    {/* <div className="write-comments mt-2">
                                        <form>
                                            <textarea name="comment" id="comment" cols="30" rows="4" placeholder="Enter New Comment Here" className="form-control"></textarea>
                                            <button type="submit" className="btn btn-primary float-right mt-2">Submit</button>
                                        </form>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default MasterView;