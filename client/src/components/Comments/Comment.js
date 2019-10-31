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