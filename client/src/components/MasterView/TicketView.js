import React, {Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../../frontend-assets/css/masterView.css';

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
                                <div className="row mb-5">
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
                                </div>
                                <div className="row">
                                    <div className="col-md-7 padding-zero">
                                        {/* tasks list container */}
                                        <div className="task-list">
                                            <fieldset style={{boxShadow: '0 0 14px 2px #afafaf', borderRadius: 5, padding: '0 10px'}}>
                                                <legend style={{display: 'inline-block', backgroundColor: 'white', width: 'inherit',marginLeft: 10,padding: '0 10px'}}>Task List</legend>
                                                {/* tasks start here */}
                                                <div className="allTasks">
                                                    {/* task 1*/}
                                                    <div className="task">
                                                        <div className="row">
                                                            {/* task detail */}
                                                            <div className="col-md-7 col-sm-7 col-7 pr-0">
                                                                <div className="taskName">
                                                                    <p style={{fontSize: 14}}>Lorem Ipsum is simply dummy text of the printing and</p>
                                                                </div>
                                                            </div>
                                                            {/* actions container like yes, no */}
                                                            <div className="col-md-5 col-sm-5 col-5 p-0">
                                                                <div className="actions" style={{marginTop: 5}}>
                                                                    {/* yes button */}
                                                                    <button className="btn btn-success text-white" style={{padding: '4px 11px'}}>Y</button>
                                                                    {/* no button */}
                                                                    <button className="btn btn-danger text-white" style={{marginLeft: 5}}>N</button>
                                                                    {/* contact button */}
                                                                    <button className="btn btn-info" style={{marginLeft: 5}}>Contact</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* task 2*/}
                                                    <div className="task">
                                                        <div className="row">
                                                            {/* task detail */}
                                                            <div className="col-md-7 col-sm-7 col-7 pr-0">
                                                                <div className="taskName">
                                                                    <p style={{fontSize: 14}}>Lorem Ipsum is simply dummy text of the printing and</p>
                                                                </div>
                                                            </div>
                                                            {/* actions container like yes, no */}
                                                            <div className="col-md-5 col-sm-5 col-5 p-0">
                                                                <div className="actions" style={{marginTop: 5}}>
                                                                    {/* yes button */}
                                                                    <button className="btn btn-success text-white" style={{padding: '4px 11px'}}>Y</button>
                                                                    {/* no button */}
                                                                    <button className="btn btn-danger text-white" style={{marginLeft: 5}}>N</button>
                                                                    {/* contact button */}
                                                                    <button className="btn btn-info" style={{marginLeft: 5}}>Contact</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* task 3*/}
                                                    <div className="task">
                                                        <div className="row">
                                                            {/* task detail */}
                                                            <div className="col-md-7 col-sm-7 col-7 pr-0">
                                                                <div className="taskName">
                                                                    <p style={{fontSize: 14}}>Lorem Ipsum is simply dummy text of the printing and</p>
                                                                </div>
                                                            </div>
                                                            {/* actions container like yes, no */}
                                                            <div className="col-md-5 col-sm-5 col-5 p-0">
                                                                <div className="actions" style={{marginTop: 5}}>
                                                                    {/* yes button */}
                                                                    <button className="btn btn-success text-white" style={{padding: '4px 11px'}}>Y</button>
                                                                    {/* no button */}
                                                                    <button className="btn btn-danger text-white" style={{marginLeft: 5}}>N</button>
                                                                    {/* contact button */}
                                                                    <button className="btn btn-info" style={{marginLeft: 5}}>Contact</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* task 4*/}
                                                    <div className="task">
                                                        <div className="row">
                                                            {/* task detail */}
                                                            <div className="col-md-7 col-sm-7 col-7 pr-0">
                                                                <div className="taskName">
                                                                    <p style={{fontSize: 14}}>Lorem Ipsum is simply dummy text of the printing and</p>
                                                                </div>
                                                            </div>
                                                            {/* actions container like yes, no */}
                                                            <div className="col-md-5 col-sm-5 col-5 p-0">
                                                                <div className="actions" style={{marginTop: 5}}>
                                                                    {/* yes button */}
                                                                    <button className="btn btn-success text-white" style={{padding: '4px 11px'}}>Y</button>
                                                                    {/* no button */}
                                                                    <button className="btn btn-danger text-white" style={{marginLeft: 5}}>N</button>
                                                                    {/* contact button */}
                                                                    <button className="btn btn-info" style={{marginLeft: 5}}>Contact</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* task 5*/}
                                                    <div className="task">
                                                        <div className="row">
                                                            {/* task detail */}
                                                            <div className="col-md-7 col-sm-7 col-7 pr-0">
                                                                <div className="taskName">
                                                                    <p style={{fontSize: 14}}>Lorem Ipsum is simply dummy text of the printing and</p>
                                                                </div>
                                                            </div>
                                                            {/* actions container like yes, no */}
                                                            <div className="col-md-5 col-sm-5 col-5 p-0">
                                                                <div className="actions" style={{marginTop: 5}}>
                                                                    {/* yes button */}
                                                                    <button className="btn btn-success text-white" style={{padding: '4px 11px'}}>Y</button>
                                                                    {/* no button */}
                                                                    <button className="btn btn-danger text-white" style={{marginLeft: 5}}>N</button>
                                                                    {/* contact button */}
                                                                    <button className="btn btn-info" style={{marginLeft: 5}}>Contact</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* task 6*/}
                                                    <div className="task">
                                                        <div className="row">
                                                            {/* task detail */}
                                                            <div className="col-md-7 col-sm-7 col-7 pr-0">
                                                                <div className="taskName">
                                                                    <p style={{fontSize: 14}}>Lorem Ipsum is simply dummy text of the printing and</p>
                                                                </div>
                                                            </div>
                                                            {/* actions container like yes, no */}
                                                            <div className="col-md-5 col-sm-5 col-5 p-0">
                                                                <div className="actions" style={{marginTop: 5}}>
                                                                    {/* yes button */}
                                                                    <button className="btn btn-success text-white" style={{padding: '4px 11px'}}>Y</button>
                                                                    {/* no button */}
                                                                    <button className="btn btn-danger text-white" style={{marginLeft: 5}}>N</button>
                                                                    {/* contact button */}
                                                                    <button className="btn btn-info" style={{marginLeft: 5}}>Contact</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                    </div>
                                    {/* completed tasks container */}
                                    <div className="col-md-5 padding-zero">
                                        <div className="completed-tasks">
                                            <fieldset style={{boxShadow: '0 0 14px 2px #afafaf', borderRadius: 5, padding: '0 10px'}}>
                                                <legend style={{display: 'inline-block', backgroundColor: 'white', width: 'inherit',marginLeft: 10,padding: '0 10px'}}>Completed Tasks</legend>
                                                <div className="allTasks">
                                                    <div className="task">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                {/* completed tasks will appear here*/}
                                                                <ol className="taskName pl-4" style={{lineHeight: 1.7}}>
                                                                    <li style={{fontSize: 15}}>Lorem Ipsum is simply dummy text of simply dummy text of simply dummy text of</li>
                                                                    <li style={{fontSize: 15}}>Lorem Ipsum is simply dummy text of simply dummy text of</li>
                                                                    <li style={{fontSize: 15}}>Lorem Ipsum is simply dummy text of</li>
                                                                    <li style={{fontSize: 15}}>Lorem Ipsum is simply dummy text of</li>
                                                                    <li style={{fontSize: 15}}>Lorem Ipsum is simply dummy text of simply dummy text of simply dummy text of simply dummy text of</li>
                                                                    <li style={{fontSize: 15}}>Lorem Ipsum is simply dummy text of</li>
                                                                    <li style={{fontSize: 15}}>Lorem Ipsum is simply dummy text of simply dummy text of</li>
                                                                </ol>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* comments section start here*/}
                            <div className="col-md-3 padding-zero comment-container" style={{marginTop: 105}}>
                                <div className="comments">
                                    {/* showing all comments here*/}
                                    <div className="show-comments" style={{overflowX: 'hidden', height: 230, overflowY: 'scroll', border: '1px solid gray'}}>
                                        {/* single comment 1*/}
                                        <div className="single-comment">
                                            <div className="row">
                                                <div className="col-md-3 col-4">
                                                    <div className="image" style={{marginTop: 15}}>
                                                        <img src={require('../../frontend-assets/images/avatar3.png')} alt="image" className="rounded-circle w-100" style={{marginLeft: 5}}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-9 col-8 p-0">
                                                    <div className="comment" style={{width: 190, height: 75}}>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and of</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* single comment 2*/}
                                        <div className="single-comment">
                                            <div className="row">
                                                <div className="col-md-3 col-4">
                                                    <div className="image" style={{marginTop: 15}}>
                                                        <img src={require('../../frontend-assets/images/avatar3.png')} alt="image" className="rounded-circle w-100" style={{marginLeft: 5}}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-9 col-8 p-0">
                                                    <div className="comment" style={{width: 190, height: 75}}>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and of</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* single comment 3*/}
                                        <div className="single-comment">
                                            <div className="row">
                                                <div className="col-md-3 col-4">
                                                    <div className="image" style={{marginTop: 15}}>
                                                        <img src={require('../../frontend-assets/images/avatar3.png')} alt="image" className="rounded-circle w-100" style={{marginLeft: 5}}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-9 col-8 p-0">
                                                    <div className="comment" style={{width: 190, height: 75}}>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* single comment 4*/}
                                        <div className="single-comment">
                                            <div className="row">
                                                <div className="col-md-3 col-4">
                                                    <div className="image" style={{marginTop: 15}}>
                                                        <img src={require('../../frontend-assets/images/avatar3.png')} alt="image" className="rounded-circle w-100" style={{marginLeft: 5}}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-9 col-8 p-0">
                                                    <div className="comment" style={{width: 190, height: 75}}>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* single comment 5*/}
                                        <div className="single-comment">
                                            <div className="row">
                                                <div className="col-md-3 col-4">
                                                    <div className="image" style={{marginTop: 15}}>
                                                        <img src={require('../../frontend-assets/images/avatar3.png')} alt="image" className="rounded-circle w-100" style={{marginLeft: 5}}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-9 col-8 p-0">
                                                    <div className="comment" style={{width: 190, height: 75}}>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* writing comment here*/}
                                    <div className="write-comments mt-2">
                                        <form>
                                            <textarea name="comment" id="comment" cols="30" rows="4" placeholder="Enter New Comment Here" className="form-control"></textarea>
                                            <button type="submit" className="btn btn-primary float-right mt-2">Submit</button>
                                        </form>
                                    </div>
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