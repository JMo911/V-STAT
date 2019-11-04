import React from 'react';
import Card from 'react-bootstrap/Card'

const TicketCard = (props) => {

  return (
    <React.Fragment>
      <Card id="master-view-ticket">
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
          </Card.Text>
          </Card.Body>
          </Card>

          <br/>

      <Card id="contact-area">
        <Card.Body>
            <Card.Text>
                    Insurance Company: {props.insuranceCompany}
                    <br/>
                    Insurance Agent: {props.insuranceNameFirst} {props.insuranceNameLast}
                    <br/>
                    Mechanic Shop: {props.mechanicShopName}
                    <br/>
                    Mechanic: {props.mechanicNameFirst} {props.mechanicNameLast}
                    <br/>
                    Customer: {props.customerNameFirst} {props.customerNameLast}
          </Card.Text>

        </Card.Body>
        
      </Card>
    </React.Fragment>
  );
};

export default TicketCard;