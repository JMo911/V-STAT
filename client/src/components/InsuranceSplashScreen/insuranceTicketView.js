import React, { Component } from "react";
import InsuranceCard from "./insuranceCard.js";
import axios from "axios";


class InsuranceTicketView extends Component {
    state = {
      data:[]
    };

    componentWillMount() {
      let cookie = document.cookie;
      // console.log("Our cookie is: ", document.cookie);
      cookie = cookie.split(', ');
      var result = {};

      for (var i = 0; i < cookie.length; i++) {
        var curSemiSplit = cookie[i].split(';');
        result[curSemiSplit[0]] = curSemiSplit[1];
        // console.log("curSemiSplit[0] is: ", curSemiSplit[0]);
        // console.log("curSemiSplit[1] is: ", curSemiSplit[1]);




          var cur = cookie[i].split('=');
          result[cur[0]] = cur[1];
          // console.log("cur[0] is: ", cur[0]);
          // console.log("cur[1] is: ", cur[1]);
      }
      let token = result.token;
      // console.log(token);
      let userCredentials = token.split('; ');
      // console.log(userCredentials);
      let finalToken = userCredentials[0];

      // console.log("Our final token is: ", finalToken)


      axios({
        method: "get",
        url: '/api/users/user-info',
        headers: {
          Authorization: "Bearer " + finalToken
        }
      })
      .then(response => {
        const userData = response.data;
        // this.setState({ userData:userInfoData })
        console.log("Our user data is: ", userData);

        console.log("Our user ID is: ", userData.id);
        // FIRST make an API call to the user info API, THEN use that result to populate res.data.id, below.
        axios({
        method: "get",
        url: '/api/users/' + userData.id + '/tickets',
        headers: {
          Authorization: "Bearer " + finalToken
        }
      })
        .then(response => {
          const data = response.data[0].Tickets;
          this.setState({ data:data })
          // console.log("this.state.data is: ", this.state.data);
          // console.log("this.state.data[0] is: ", this.state.data[0])
          // console.log("this.state.data[0].tickets is: ", this.state.data[0].tickets)
          // console.log("this. is: ", this.state.data[0].Tickets)

        }).catch(function(error) {
          console.log(error);
        })




      }).catch(function(error) {
        console.log(error);
      })
    







    }
  
    render() {
      return (
        <React.Fragment>
            <div id="cardarea">
            {/* {this.state.data[0].Tickets.map(data => ( */}
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
                    // customerNameFirst={data.customerNameFirst}
                    // customerNameLast={data.customerNameLast}
                    // mechanicNameFirst={data.mechanicNameFirst}
                    // mechanicNameLast={data.mechanicNameLast}
                    // mechanicShopName={data.mechanicShopName}
                    // insuranceNameFirst={data.insuranceNameFirst}
                    // insuranceNameLast={data.insuranceNameLast}
                    // insuranceCompany={data.insuranceCompany}
                    />
                ))}
            </div>
        </React.Fragment>
      )
    }
}
export default InsuranceTicketView;