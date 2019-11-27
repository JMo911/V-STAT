import React from 'react';
import Card from 'react-bootstrap/Card'
import {Button} from "react-bootstrap";
import {Link} from 'react-router-dom';

const InsuranceCard = (props) => {
  return (
    <React.Fragment>
    <div id="cardDiv">
      <Card style={{backgroundColor: "rgba(255,255,255,0.2"}}>
        <Card.Body>
        <Card.Title>{props.vehicleMake} {props.vehicleModel} {props.vehicleYear}</Card.Title>
          <br/>
          <Card.Text>
              Customer: {props.customerNameFirst} {props.customerNameLast}
              <br/>
              Case Number: {props.caseNumber}
              <br/>
              Estimated Cost: ${props.estimatedCost}
              <br/>
              Approval Date: {props.approvalDate}
              <br/>
              Vehicle Mileage: {props.vehicleMileage}
              {/* <br/>
              Insurance Company: {props.insuranceCompany}
              <br/>
              Insurance Agent: {props.insuranceNameFirst} {props.insuranceNameLast}
              <br/>
              Mechanic Shop: {props.mechanicShopName}
              <br/>
              Mechanic: {props.mechanicNameFirst} {props.mechanicNameLast} */}
          </Card.Text>

        </Card.Body>
        <Link to = {`/MasterView/${props.dataKey}`}>
          <Button variant="primary">View Ticket</Button>
        </Link>
      </Card>
    </div>
    </React.Fragment>
  );
};

export default InsuranceCard;