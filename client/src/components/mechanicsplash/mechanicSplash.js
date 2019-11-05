import React, { Component } from "react";
import MechanicCard from "./mechanicCard.js";
import axios from "axios";


class MechanicSplash extends Component {
    state = {
      data:[]
    };

    componentWillMount() {
      let cookie = document.cookie;
      console.log("Our cookie is: ", document.cookie);
      cookie = cookie.split(', ');
      var result = {};

      for (var i = 0; i < cookie.length; i++) {
        var curSemiSplit = cookie[i].split(';');
        result[curSemiSplit[0]] = curSemiSplit[1];
        console.log("curSemiSplit[0] is: ", curSemiSplit[0]);
        console.log("curSemiSplit[1] is: ", curSemiSplit[1]);




          var cur = cookie[i].split('=');
          result[cur[0]] = cur[1];
          console.log("cur[0] is: ", cur[0]);
          console.log("cur[1] is: ", cur[1]);
      }
      let token = result.token;
      console.log(token);
      let userCredentials = token.split('; ');
      let finalToken = userCredentials[0];
      axios({
        method: "get",
        url: '/api/tickets',
        headers: {
          Authorization: "Bearer " + finalToken
        }
      })
      .then(response => {
        const data = response.data;
        this.setState({ data:data })
        console.log("this.state.data is: ", this.state.data);
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
export default MechanicSplash;