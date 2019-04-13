import React, { Component } from 'react';

import './App.css';
import CountDown from './components/CountDown2';
import Rsvp from './components/rsvp'
import { Jumbotron } from 'react-bootstrap';

class App extends Component {

  
  

  render() {
    
    return (
      <div className="App">
      <div> 
        <h1 className="title" id="1">Jordans </h1>
        <h1 className="title" id="2">10'th</h1>
        <h1 className="title" id="3">Birthday!</h1>
        </div>

        <CountDown />
        <Rsvp />
      
        
      </div>
    );
  }
}

export default App;
