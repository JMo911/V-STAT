import React, {Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../../frontend-assets/css/masterView.css';
import axios from 'axios';
import {Button, Container, Card, Col, Form} from 'react-bootstrap';
import {List, ListItem} from "./commentList.js";
import data from "../data/data.json";



class Comments extends Component {

    constructor(props) {
        super(props);
        console.log(data);
        this.state = {
            comments:data[0].comments,

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
            <Container>
                {/* ================================================= */}
                <div id="comment-box">
                    {this.state.comments.length ? (
                    <List>
                        {this.state.comments.map(comment => (
                        <ListItem key={comment.commentId}>
                                <img className="comment-avatar" src={comment.profilePic} alt="stuff" />
                                {comment.author} : {comment.commentText}
                                {/* <DeleteBtn
                                    deleteBook = { () => this.deleteBook(book._id)} 
                                /> */}
                        </ListItem>
                    
                    ))}
                    </List>
                    ) : (
                    <h3>No Comments to Display</h3>
                    )}
                {/* ================================================= */}
                </div>

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
            </Container>
        )
    }
}


    export default Comments;