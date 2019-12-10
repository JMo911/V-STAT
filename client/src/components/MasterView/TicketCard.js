import React from 'react';
import Card from 'react-bootstrap/Card'

const TicketCard = (props) => {
  return (
    <React.Fragment>
      <Card id="master-view-ticket">
        <Card.Body>
          {/* {console.log("Child is grabbing props: ", props)}
          {console.log("Child is grabbing props.props: ", props.props)}
          {console.log("Child is grabbing props.props[0]: ", props.props[0])} */}
          {/* {console.log("Child is grabbing props.props[0].vehicleMake: ", props.props[0].vehicleMake)} */}
          <Card.Title>{props.vehicleMake} {props.vehicleModel} {props.vehicleYear}</Card.Title>
          <br />
          <Card.Text>
            Vehicle Make: {props.vehicleMake}
            <br />
            Vehicle Model: {props.vehicleModel}
            <br />
            Vehicle Year: {props.vehicleYear}
            <br />
            Mileage: {props.vehicleMileage}
            <br />
            Estimated Cost: ${props.estimatedCost}
            <br />
            Estimated Completion Date: {props.approvalDate}

            <br />
            Case Number: {props.caseNumber}
          </Card.Text>
        </Card.Body>
      </Card>

      <br />

    </React.Fragment>
  );
}

export default TicketCard;