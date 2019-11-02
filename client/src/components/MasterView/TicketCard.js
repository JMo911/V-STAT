import React from 'react';
import Card from 'react-bootstrap/Card'

const TicketCard = (props) => {

  return (
    <React.Fragment>
    <div className="cardDiv">
      <Card style={{backgroundColor: "rgba(255,255,255,0.2"}}>
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

      <Card>

        <Card.Body>
            <Card.Text>
            <div className="col-md-6">
              <div className="row details">
                      {/* details headings like contacts etc */}
                      <div className="col-md-10 col-sm-6 col-6 pr-0">
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
                </div>
            </div>
          </div>
          </Card.Text>

        </Card.Body>
        
      </Card>
    </div>
    </React.Fragment>
  );
};

export default TicketCard;