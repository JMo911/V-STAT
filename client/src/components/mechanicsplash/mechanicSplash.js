import React, { Component } from "react";
import MechanicCard from "./mechanicCard.js";
import axios from "axios";
// import data from "../data/data.json";


class MechanicSplash extends Component {
    state = {
      data:[]
    };

    componentWillMount() {
      console.log("Grabbing data...");
      axios.get("api/tickets")
      .then(response => {
        console.log("Got a response!");

        const data = response.data;
        this.setState({ data:data })


      }).catch(function(error) {
        console.log(error);
      })
    }
  
    render() {
      return (
        <React.Fragment>
            <div id="cardarea">
                {this.state.data.map(data => (
                    <MechanicCard 

                    caseNumber={data.caseNumber}
                    estimatedCost={data.estimatedCost}
                    approvalDate={data.approvalDate}
                    vehicleMake={data.vehicleMake}
                    vehicleModel={data.vehicleModel}
                    vehicleYear={data.vehicleYear}
                    vehicleMileage={data.vehicleMileage}
                    customerNameFirst={data.customerNameFirst}
                    customerNameLast={data.customerNameLast}
                    mechanicNameFirst={data.mechanicNameFirst}
                    mechanicNameLast={data.mechanicNameLast}
                    insuranceNameFirst={data.insuranceNameFirst}
                    insuranceNameLast={data.insuranceNameLast}



                    // make={data.make}
                    // model={data.model}
                    // year={data.year}
                    // name={data.name}
                    // insurer={data.insurer}
                    // insurerAgent={data.insurerAgent}
                    // photo={data.photo}
                    />
                ))}
            </div>
        </React.Fragment>
      )
    }
}
export default MechanicSplash;