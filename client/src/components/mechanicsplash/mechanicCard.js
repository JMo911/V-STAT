import React from 'react';
import Card from 'react-bootstrap/Card'
import {Button} from "react-bootstrap";

const MechanicCard = (props) => {
  return (
    <React.Fragment>
    <div className="cardDiv">
      <Card style={{backgroundColor: "rgba(255,255,255,0.2"}}>
        {/* <Card.Img top width="100%" src={props.photo} alt="Card image cap" /> */}
        <Card.Body>
          <Card.Title>{props.make} {props.model} {props.year}</Card.Title>
          <br/>
          <Card.Text>
              Customer: {props.name}
              <br/>
              Insurance Company: {props.insurer}
              <br/>
              Insurance Agent: {props.insurerAgent}
              <br/>
              <img src={props.photo} alt="stuff" />
          </Card.Text>

        </Card.Body>
        <Button>View Ticket</Button>
      </Card>
    </div>
    </React.Fragment>
  );
};

export default MechanicCard;