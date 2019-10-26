import React from 'react';
import Card from 'react-bootstrap/Card'
import {Button} from "react-bootstrap";
import {Link} from 'react-router-dom';

const MechanicCard = (props) => {

  // "caseNumber": {data.caseNumber},
  // "estimatedCost": {data.estimatedCost},
  // "approvalDate": {data.approvalDate},
  // "vehicleMake": {data.vehicleMake},
  // "vehicleModel": {data.vehicleModel},
  // "vehicleYear": {data.vehicleYear},
  // "vehicleMileage": {data.vehicleMileage}
  return (
    <React.Fragment>
    <div className="cardDiv">
      <Card style={{backgroundColor: "rgba(255,255,255,0.2"}}>
        {/* <Card.Img top width="100%" src={props.photo} alt="Card image cap" /> */}
        <Card.Body>
          <Card.Title>{props.vehicleMake} {props.vehicleModel} {props.vehicleYear}</Card.Title>
          <br/>
          <Card.Text>
              Case Number: {props.caseNumber}
              <br/>
              Estimated Cost: ${props.estimatedCost}
              <br/>
              Approval Date: {props.approvalDate}
              <br/>
              Vehicle Mileage: {props.vehicleMileage}
              {/* <img src={props.photo} alt="stuff" /> */}
          </Card.Text>

        </Card.Body>
        <Link to = "/insurance-ticket-view">
          <Button variant="primary">View Ticket</Button>
        </Link>
      </Card>
    </div>
    </React.Fragment>
  );
};

export default MechanicCard;