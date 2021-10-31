import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Forms.css'
const Forms = () => {
    return (
        <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30 }} className='form'>
      <h4>Client Order Confirmation Form</h4>
      <Form>
      <Form.Group>
          <Form.Label>Enter your full name:</Form.Label>
          <Form.Control type="text" 
                        placeholder="Enter your full name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your email address:</Form.Label>
          <Form.Control type="email" 
                        placeholder="Enter your your email address" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your Address:</Form.Label>
          <Form.Control type="text" 
                        placeholder="Enter your Address" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your Contact Number:</Form.Label>
          <Form.Control type="text" 
                        placeholder="Enter your Contact Number" />
        </Form.Group>
        <br />
        <br />
        <Button variant="primary" type="submit">
           Click here to submit 
        </Button>
      </Form>
    </div>
    );
};

export default Forms;
