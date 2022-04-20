import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from "react-redux";

const AcountDetailsForm = () => {
  // const [informations, setInformations] = useState([]);
  const userInfo=useSelector(state=>state.user.userInfo)
  useEffect(() => {
    
  }, []);
  return (
    console.log(userInfo),
    <Form>
      <Row className='mb-3'>

      <Col sm={8}>

      <Form.Group controlId='formGridFristName'>
          <Form.Label>First Name</Form.Label>
          <Form.Control type='text' placeholder='' value={userInfo.firstName} />
        </Form.Group>

        <Form.Group acontrolId='formGridLastName'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control type='text' placeholder='' value={userInfo.lastName}/>
        </Form.Group>

        <Form.Group controlId='formGridEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='' value={userInfo.email}/>
        </Form.Group>

        </Col>


      </Row>

     

      <Button type='submit'>
        Update
      </Button>
    </Form>
  );
};

export default AcountDetailsForm;
