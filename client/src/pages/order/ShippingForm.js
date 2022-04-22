import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addShippingAddress } from '../../store/actions/cartActions';
import { useNavigate } from 'react-router-dom';

const ShippingForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { shippingInfo } = useSelector((state) => state.cart);
  const [address, setAddress] = useState(shippingInfo?.address ?? '');
  const [city, setCity] = useState(shippingInfo?.city ?? '');
  const [country, setCountry] = useState(shippingInfo?.country ?? '');
  const [phone, setPhone] = useState(shippingInfo?.phone ?? '');

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addShippingAddress({
        address,
        city,
        country,
        phone,
      })
    );
    navigate('/payment');
  };

  return (
    <Card
      className='shadow-sm text-center'
      style={{ maxWidth: '30rem', margin: '30px auto' }}
    >
      <Card.Body>
        <Card.Title className='h3 my-3 text-center'>
          Shipping Address
        </Card.Title>
        <Form onSubmit={submitHandler}>
          <Form.Group className='mb-3'>
            <Form.Label className='h6'>Address</Form.Label>
            <Form.Control
              onChange={(e) => setAddress(e.target.value)}
              value={address ?? ''}
              placeholder='Apartment, Bulding, Street'
            />
          </Form.Group>

          <Row className='mb-3'>
            <Form.Group as={Col}>
              <Form.Label className='h6'>Town / City</Form.Label>
              <Form.Control
                onChange={(e) => setCity(e.target.value)}
                value={city ?? ''}
                placeholder='Cairo'
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label className='h6'>State / County</Form.Label>
              <Form.Control
                onChange={(e) => setCountry(e.target.value)}
                value={country ?? ''}
                placeholder='Egypt'
              />
            </Form.Group>
          </Row>

          <Form.Group className='mb-3'>
            <Form.Label className='h6'>Phone</Form.Label>
            <Form.Control
              onChange={(e) => setPhone(e.target.value)}
              value={phone ?? ''}
              placeholder='01012345678'
            />
          </Form.Group>
          <Button variant='dark' type='submit'>
            Continue
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};
export default ShippingForm;
