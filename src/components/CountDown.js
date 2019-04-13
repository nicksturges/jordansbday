import React, { Component } from 'react';
import '../App.css';

let partyDate = new Date('05/4/2019');
// let date = new Date().toLocaleDateString();
// let count = partyDate - date;
export class CountDown extends Component {
  
  render() { 

    return (
      <div>
      
        <h1>{new Date(partyDate).toDateString()}</h1>

        {/* <h1>{new Date(count).toDateString()}</h1> */}
       
      </div>
    )
  }
}


export default CountDown
