import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  import '../App.css';
// import Button from 'react-bootstrap/Button';
export class rsvp extends Component {
  render() {
      let cardStyle = {
          height: '200px',
          width: '200px',
          marginTop: '20px',
          boxShadow: '3px 5px 3px'
      }
      
    return (
      
       <div className="cardDiv">
      <Card style={cardStyle}>
        <CardImg top width="50%" style={{height:'100%'}} src="https://images-na.ssl-images-amazon.com/images/I/51yQeNJ42qL._SX348_BO1,204,203,200_.jpg" alt="Card image cap" />
        <CardBody>
          
          <CardSubtitle>Click on the button to rsvp to Jordans 10th Birthday Party!</CardSubtitle>
          <Button href="https://jordansbday.app.rsvpify.com" style={{background : " green"}}>RSVP</Button>
        </CardBody>
      </Card>
      </div>
    
            
    );
  }
}

export default rsvp
