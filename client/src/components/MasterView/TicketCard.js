import React from 'react';
import Card from 'react-bootstrap/Card'
// import {Button} from "react-bootstrap";

const TicketCard = (props) => {

  return (
    <React.Fragment>
    <div className="cardDiv">
      <Card style={{backgroundColor: "rgba(255,255,255,0.2"}}>
        {/* <Card.Img top width="100%" src={props.photo} alt="Card image cap" /> */}
        <Card.Body>
          <Card.Title>{props.vehicleMake} {props.vehicleModel} {props.vehicleYear}</Card.Title>
          <br/>
          <Card.Text>
                Vehicle Make: {props.vehicleMake}
                <br/>
                Vehicle Model: {props.vehicleModel}
                <br/>
                Vehicle Year: {props.vehicleYear}
                <br/>
                Mileage: {props.vehicleMileage}
                <br/>
                Estimated Cost: ${props.estimatedCost}
                <br/>
                Approval Date: {props.approvalDate}

                <br/>
                Case Number: {props.caseNumber}

            
                <div id="contact-area">
                    Insurance Company: {props.insuranceCompany}
                    <br/>
                    Insurance Agent: {props.insuranceNameFirst} {props.insuranceNameLast}
                    <br/>
                    Mechanic Shop: {props.mechanicShopName}
                    <br/>
                    Mechanic: {props.mechanicNameFirst} {props.mechanicNameLast}
                    <br/>
                    Customer: {props.customerNameFirst} {props.customerNameLast}
                </div>
          </Card.Text>

        </Card.Body>
      </Card>
    </div>
    </React.Fragment>
  );
};

export default TicketCard;