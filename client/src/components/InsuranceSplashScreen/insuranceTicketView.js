import React, { Component } from "react";
import InsuranceCard from "./insuranceCard.js";

import data from "../data/data.json";


class InsuranceTicketView extends Component {
    state = {
      data:data
    };
  
    render() {
      return (
        <React.Fragment>
            <div id="cardarea">
                {this.state.data.map(data => (
                    <InsuranceCard 
                    key={data.caseNumber}
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
                    mechanicShopName={data.mechanicShopName}
                    insuranceNameFirst={data.insuranceNameFirst}
                    insuranceNameLast={data.insuranceNameLast}
                    insuranceCompany={data.insuranceCompany}
                    />
                ))}
            </div>
        </React.Fragment>
      )
    }
}
export default InsuranceTicketView;