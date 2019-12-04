import React, { Component } from 'react';
import axios from 'axios';
import { Button, Container, Form } from 'react-bootstrap';
import { List, ListItem } from "./commentList.js";
import data from '../data/data.json'

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: data[0].comments,
            comment: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        let name = event.target.name;
        this.setState({ [name]: event.target.value });
        // console.log(this.state.comment)
    }

    handleSubmit(event) {
        let cookie = document.cookie;
        cookie = cookie.split(', ');
        var result = {};

        for (var i = 0; i < cookie.length; i++) {
            var curSemiSplit = cookie[i].split(';');
            result[curSemiSplit[0]] = curSemiSplit[1];
            var cur = cookie[i].split('=');
            result[cur[0]] = cur[1];
        }
        let token = result.token;
        let userCredentials = token.split('; ');
        let finalToken = userCredentials[0];
        const userID = document.cookie.split(";")[1].split("=")[1];
        const ticketNumber = window.location.href[window.location.href.length - 1];
        const newComment = {
            message: this.state.comment,
            UserId: userID,
            TicketId: ticketNumber
        }


        axios({
            method: "post",
            url: '/api/comments',
            headers: {
                Authorization: "Bearer " + finalToken
            },
            data: newComment
        })
            .then(response => {
                // console.log("Comment created")
                this.readComments();
                this.setState({comment: ""})
            })
            .catch(error => {
                console.log(error);
            })
        event.preventDefault();
    }

    readComments = () => {
        let cookie = document.cookie;
        cookie = cookie.split('; ');
        let userId = cookie[0].split('=');
        let finalUserId = userId[1];

        var result = {};
        for (var i = 0; i < cookie.length; i++) {
            var cur = cookie[i].split('=');
            result[cur[0]] = cur[1];
        }
        let token = result.token;
        let userCredentials = token.split('; ');
        let finalToken = userCredentials[0];
        const ticketNumber = window.location.href[window.location.href.length - 1];
        axios({
            method: "get",
            url: '/api/tickets/' + ticketNumber + "/comments",
            headers: {
                Authorization: "Bearer " + finalToken
            }
        })
            .then(response => {
                const data = response.data[0].Comments;
                
                const comments = [];
                data.forEach(element => {
                    // element.username="TBD"
                    comments.push(element);
                });
                // comments.push(data)
                // console.log("COMMENT DATA", comments)
                

                //LOOKUP USER BY ID

                for (let i = 0; i< data.length; i++) {
                    axios({
                        method: "get",
                        url: '/api/users/' + data[i].UserId,
                        headers: {
                        Authorization: "Bearer " + finalToken
                        }
                    })
                    .then(response => {
                        const userData = response.data;
                        // console.log("User's name: ",userData.username);
                        
                        comments[i].username = userData.username;
                        comments[i].UserTypeId = userData.UserTypeId;
                        
                        // // .setArribute("username", userData.username)
                        // // this.setState({customerID:data})
                        // console.log("FULLCOMMENTS",comments);
                        this.setState({ comments: comments })
                        
                    }).catch(function(error) {
                        console.log(error);
                    })
                }
                
                // console.log(this.state.comments);
            }).catch(function (error) {
                console.log("error:", error);
            })
    }

    componentWillMount() {
        this.readComments();    
        // this.readUserName();
    }


    render() {
        return (
            <Container>
                {/* ================================================= */}
                <div id="comment-box">
                    {this.state.comments.length > 0 ? (
                        <List>
                            {this.state.comments.map(comment => (
                                <ListItem key={comment.id}>
                                    {/* <img className="comment-avatar" src={comment.profilePic} alt="stuff" /> */}
                                    {comment.username}: {comment.message}
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

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicPassword">

                        <Form.Label>Comments</Form.Label>

                        <Form.Control
                            type="text"
                            placeholder="Place your comment"
                            value={this.state.comment}
                            onChange={this.handleInputChange}
                            name="comment" />

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