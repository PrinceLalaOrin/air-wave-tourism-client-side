import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Booking.css'
const Booking = () => {
    const {serviceId} = useParams();
    
    const[service, setService] = useState({})
    // console.log(service);
    useEffect(() => {
        fetch(`https://guarded-refuge-72039.herokuapp.com/items/${serviceId}`)
        .then(res=> res.json())
        .then(data => setService(data));
    }, [])

   const {details, product, price} = service;
    
    return (
        <div className="align-items-center card">
            <h1> My Orders</h1>
         <Card border="info" style={{ width: '18rem' }}>
                <Card.Header> <h3>Selected Package : {product}</h3> </Card.Header>
             <Card.Body>
               <Card.Text>
                Details : {details}
               </Card.Text>
                <Card.Title>Price: {price}</Card.Title>
                <Button variant="outline-success"><Link to='/form'>Confirm</Link></Button>
                <br />
                <br />
                <Button variant="outline-danger">Cancel</Button>
             </Card.Body>
        </Card>
        </div>
    )
    };

export default Booking;