import React, { Component } from "react";
import MechanicCard from "./mechanicCard.js";

import data from "../data/data.json";


class MechanicSplash extends Component {
    state = {
      data:data
    };
  
    render() {
      return (
        <React.Fragment>
            <div id="cardarea">
                {this.state.data.map(data => (
                    <MechanicCard 
                    make={data.make}
                    model={data.model}
                    year={data.year}
                    name={data.name}
                    insurer={data.insurer}
                    insurerAgent={data.insurerAgent}
                    photo={data.photo}
                    />
                ))}
            </div>
        </React.Fragment>
      )
    }
}
export default MechanicSplash;