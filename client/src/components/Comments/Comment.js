import React, {Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../../frontend-assets/css/masterView.css';


class Comments extends Component {
    render() {
        return (
            <section>
<div className="col-md-20 padding-zero comment-container" style={{marginTop: 105}}>
                    <div>
                            <div>
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
        );
        }
        }


    export default Comments;