import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './DisplayItems.css'
const DisplayItems = (props) => {

    const {product, img, highlights, _id } = props.product

    return (
        <div className='col-md-4 mx-auto cards'>
             <Card style={{width:"90%", height:"95%"}} className='mt-5'>
        <Card.Img variant="top" src={img} className='card-img-top mx-auto my-3 d-block' />
        <Card.Body style={{fontSize: 15}}>
          <Card.Title>Package : {product}</Card.Title>
          
          <Card.Text>
            {highlights}
          </Card.Text>
         <Link to={`/booking/${_id}`}> <Button variant="warning">Book Now</Button></Link>
        </Card.Body>
        
      </Card>
        </div>
    );
};

export default DisplayItems;

