import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const OrderForm = () => {
  return (
    <Form>
      <h2 className='h4'>Billing details</h2>
      <Row className='mb-3'>
        <Form.Group as={Col} controlId='formGridEmail'>
          <Form.Label>First name *</Form.Label>
          <Form.Control type='text' placeholder='Enter first name' />
        </Form.Group>

        <Form.Group as={Col} controlId='formGridPassword'>
          <Form.Label>Last name *</Form.Label>
          <Form.Control type='text' placeholder='Enter last name' />
        </Form.Group>
      </Row>

      <Form.Group className='mb-3' controlId='formGridAddress1'>
        <Form.Label>Street address *</Form.Label>
        <Form.Control placeholder='1234 Main St' />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formGridAddress2'>
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder='Apartment, studio, or floor' />
      </Form.Group>

      <Row className='mb-3'>
        <Form.Group as={Col} controlId='formGridCity'>
          <Form.Label>Town / City *</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId='formGridState'>
          <Form.Label>State / County *</Form.Label>
          <Form.Select defaultValue='Choose...'>
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId='formGridZip'>
          <Form.Label>Postcode / ZIP *</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className='mb-3' controlId='formGridAddress1'>
        <Form.Label>Phone *</Form.Label>
        <Form.Control placeholder='1234 Main St' />
      </Form.Group>

      <Form.Group controlId='formGridEmail'>
        <Form.Label>Email</Form.Label>
        <Form.Control type='email' placeholder='Enter email' />
      </Form.Group>

      <Form.Group className='my-3' id='formGridCheckbox'>
        <Form.Check type='checkbox' label="Yes, I'm ok with .........." />
      </Form.Group>

      <Button variant='dark' type='submit'>
        Submit
      </Button>
    </Form>
  );
};

export default OrderForm;
