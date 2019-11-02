import React, {Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../../frontend-assets/css/masterView.css';
import axios from 'axios';
import {Button, Card, Col, Form} from 'react-bootstrap';



class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comment: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let name = event.target.name;
        this.setState({ [name]: event.target.value });
    }

    handleSubmit(event) {

        const comment = {
            comment: this.state.comment,
            UsertypeId: 1
        }
        axios.post('/api/comments', comment)
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            }); event.preventDefault();
    }

    render() {
        return (
<Form onSubmit = {this.handleSubmit}>
            <Form.Group controlId="formBasicPassword">
                
                <Form.Label>Comments</Form.Label>
                
                    <Form.Control 
                    type="text" 
                    placeholder="Place your comment" 
                    value= {this.state.comment}
                    onChange={this.handleChange}
                    name="comment"/>

            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
</Form>
 
//             <section>
// <div className="col-md-20 padding-zero comment-container" style={{marginTop: 105}}>
//                     <div>
//                             <div>
//                                 <div className="comments">
//                                     {/* showing all comments here*/}
//                                     <div className="show-comments" style={{overflowX: 'hidden', height: 230, overflowY: 'scroll', border: '1px solid gray'}}>
                                     
//                                     </div>
//                                     {/* writing comment here*/}
//                                     <div className="write-comments mt-2">
//                                         <form>
//                                             <textarea name="comment" id="comment" cols="30" rows="4" placeholder="Enter New Comment Here" className="form-control"></textarea>
//                                             <button type="submit" className="btn btn-primary float-right mt-2">Submit</button>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                 </div>
//         </div>
//         </section>     
        );
        }
        }


    export default Comments;