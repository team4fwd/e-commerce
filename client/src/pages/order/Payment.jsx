import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addPaymentMethod } from '../../store/actions/cartActions';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { shippingInfo } = useSelector((state) => state.cart);

  if (!shippingInfo) navigate('/shipping');

  console.log(paymentMethod);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addPaymentMethod(paymentMethod));
    navigate('/order');
  };

  return (
    <Card
      className='shadow-sm text-center'
      style={{ width: '30rem', margin: '30px auto', padding: '30px' }}
    >
      <Card.Body>
        <Card.Title className='font-weight-bold my-3 text-center'>
          Select Payment Method
        </Card.Title>
        <Form className='' onSubmit={submitHandler}>
          <Form.Check
            name='payment'
            type='radio'
            id='cash'
            checked={paymentMethod === 'cash'}
            value='cash'
            onChange={(e) => setPaymentMethod(e.target.value)}
            label='Cash on delivery'
            style={{
              width: '200px',
              margin: '0 auto',
              fontSize: '18px',
              padding: '20px',
              borderBottom: '1px solid black',
              fontWeight: '500',
            }}
          />
          <Form.Check
            name='payment'
            type='radio'
            id='credit'
            checked={paymentMethod === 'credit'}
            value='credit'
            onChange={(e) => setPaymentMethod(e.target.value)}
            label='Credit Card'
            style={{
              width: '200px',
              margin: '0 auto',
              fontSize: '18px',
              padding: '20px',
              fontWeight: '500',
            }}
          />
          <Button
            style={{ width: '200px', marginTop: '10px' }}
            variant='dark'
            type='submit'
          >
            Continue
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};
export default Payment;
