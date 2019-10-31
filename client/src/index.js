import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// import { createStore } from 'redux';
// import { Provider} from "react-redux";

// const { createStore } = require("redux");

// const initialState = {
    
// }


// const reducer = (state = initialState, action) => {

//     const newState = {...state};

//     switch (action.type) {
//         case "ADDVEHICLE":
//             console.log("Adding " + action.payload + " to State!");
//             return { ...newState, ...action.payload };
//             // break;
//         case "CREATE_TICKET":
//             console.log("(main index.js)Creating a new ticket!");
//             break;
//         default:
//     }
//     return newState;
// }
// const store = createStore(
//     reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     );


// console.log("Before action dispatch", store.getState());

// store.subscribe(() => {
//     console.log("change detected", store.getState());
// });

// store.dispatch({type:"ADDVEHICLE", payload: {vehicle: "Batmobile"}})

// console.log("After action dispatch", store.getState());




// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();






