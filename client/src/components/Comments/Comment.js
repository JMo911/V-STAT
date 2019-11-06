import React, {Component} from 'react';
import '../../frontend-assets/css/masterView.css';
import axios from 'axios';
import {Button, Container, Form} from 'react-bootstrap';
import {List, ListItem} from "./commentList.js";
import data from '../data/data.json'



class Comments extends Component {

    constructor(props) {
        super(props);
        // console.log(data);
        this.state = {
            comments:data[0].comments,
            comment: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    addComment(event) {
        if (this.onSubmit.value !== "") {
            var newComment = {
                text: this.onSubmit.value,
                key: Date.now()
            }
            console.log(newComment.data.config.data);
        }
    }

    handleInputChange(event) {
        let name = event.target.name;
        this.setState({ [name]: event.target.value });
        console.log(this.state.comment)
    }

    handleSubmit(event) {
        
        let cookie = document.cookie;
        // console.log("Our cookie is: ", document.cookie);
        cookie = cookie.split(', ');
        var result = {};
  
        for (var i = 0; i < cookie.length; i++) {
          var curSemiSplit = cookie[i].split(';');
          result[curSemiSplit[0]] = curSemiSplit[1];
          // console.log("curSemiSplit[0] is: ", curSemiSplit[0]);
          // console.log("curSemiSplit[1] is: ", curSemiSplit[1]);
  
  
  
  
            var cur = cookie[i].split('=');
            result[cur[0]] = cur[1];
            // console.log("cur[0] is: ", cur[0]);
            // console.log("cur[1] is: ", cur[1]);
        }
        let token = result.token;
        // console.log(token);
        let userCredentials = token.split('; ');
        // console.log(userCredentials);
        let finalToken = userCredentials[0];
        const userID = document.cookie.split(";")[1].split("=")[1];
        const ticketNumber = window.location.href[window.location.href.length -1];
        const newComment = {
            message: this.state.comment,
            UserId: userID,
            TicketId: ticketNumber
        }
  
        // console.log("Our final token is: ", finalToken)
  
  
        axios({
          method: "post",
          url: '/api/comments',
          headers: {
            Authorization: "Bearer " + finalToken
          },
          data: newComment
        })
        .then(response => {
            console.log("Comment created")
        })
        .catch(error => {
            console.log(error);
        })

                // const comment = {
                //     message: this.state.comment,
                //     UsertypeId: 1
                // }
                // axios.post('/api/comments', comment)
                //     .then(function (response) {
                //     })
                //     .catch(function (error) {
                //         console.log(error);
                //     }); 
        event.preventDefault();
    }

    componentWillMount() {
        let cookie = document.cookie;
        cookie = cookie.split('; ');
        let userId = cookie[0].split('=');
        let finalUserId = userId[1];

        // console.log("our real user ID is: " + finalUserId);

        var result = {};
        for (var i = 0; i < cookie.length; i++) {
            var cur = cookie[i].split('=');
            result[cur[0]] = cur[1];
        }
        let token = result.token;
        let userCredentials = token.split('; ');
        let finalToken = userCredentials[0];
        const ticketNumber = window.location.href[window.location.href.length -1];
        axios({
            method: "get",
            url: '/api/tickets/' + ticketNumber + "/comments",
            headers: {
              Authorization: "Bearer " + finalToken
            }
          })
          .then(response => {
            const data = response.data[0].Comments;
            console.log("COMMENT DATA",data)
            this.setState({comments: data})
            const incompleteTasks=[];
            const completeTasks=[];
            // data.forEach(element => {
            //     console.log(element.completed);
            //     if(element.completed) {
            //         completeTasks.push(element)
            //         console.log(element)
            //     } else {
            //         incompleteTasks.push(element)
            //     }
            // });
            // this.setState({
            //     tasks:incompleteTasks,
            //     completedTasks: completeTasks
            // });
            // console.log("TASK DATA",this.state.tasks)
            // this.setState({ data:data })
          }).catch(function(error) {
            console.log("error:", error);
          })
          console.log(this.state.completedTasks)
    }


    render() {
        return (
            <Container>
                {/* ================================================= */}
                <div id="comment-box">
                    {this.state.comments.length ? (
                    <List>
                        {this.state.comments.map(comment => (
                        <ListItem key={comment.id}>
                                {/* <img className="comment-avatar" src={comment.profilePic} alt="stuff" /> */}
                                UserID: {comment.UserId}  Comment: {comment.message}
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
                            onChange={this.handleInputChange}
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