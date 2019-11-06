import React from 'react';
import Card from 'react-bootstrap/Card'

const TicketCard = (props) => {
  return (
    <React.Fragment>
      {/* <Card id="master-view-ticket">
        <Card.Body>
          {console.log("Child is grabbing props: ", props)}
          {console.log("Child is grabbing props.props: ", props.props)}
          {console.log("Child is grabbing props.props[0]: ", props.props[0])}
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
                Estimated Completion Date: {props.approvalDate}

                <br/>
                Case Number: {props.caseNumber}
          </Card.Text>
        </Card.Body>
      </Card> */}





      <Card id="master-view-ticket">
        {/* <Card.Img top width="100%" src={props.photo} alt="Card image cap" /> */}
        <Card.Body>
          {/* {console.log("Child is grabbing props: ", props)}
          {console.log("Child is grabbing props.props: ", props.props)}
          {console.log("Child is grabbing props.props[0]: ", props.props[0])} */}
          {/* {console.log("Child is grabbing props.props[0].vehicleMake: ", props.props[0].vehicleMake)} */}
          <Card.Title>Audi A4 2017</Card.Title>
          <br/>
          <Card.Text>
                Vehicle Make: Audi
                <br/>
                Vehicle Model: A4
                <br/>
                Vehicle Year: 2017
                <br/>
                Mileage: 27,000
                <br/>
                Estimated Cost: $1
                <br/>
                Estimated Completion Date: 5 Days

                <br/>
                Case Number: casenum1
          </Card.Text>
        </Card.Body>
      </Card>

          <br/>

      <Card id="contact-area">
        <Card.Body>
            <Card.Text>
                    Insurance Company: State Farm
                    <br/>
                    Insurance Agent: Jake from State Farm
                    <br/>
                    Mechanic Shop: Pop's Popup Shop
                    <br/>
                    Mechanic: Rosie the Riveter
                    <br/>
                    Customer: Jill Doe
          </Card.Text>

        </Card.Body>
        
      </Card>
    </React.Fragment>
  );
}

export default TicketCard;