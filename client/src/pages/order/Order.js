import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import classes from './Order.module.scss';
import OrderForm from '../../components/order/OrderForm';
import Form from 'react-bootstrap/Form';

const Order = () => {
  return (
    <>
      <SectionTitle title='Order' />
      <div className={classes['order-card']}>
        <OrderForm />
        <div className={classes['order-summary']}>
          <h2 className={classes['order-summary__title']}>Your order</h2>
          <div className={classes['order-summary__product']}>
            <span>Product</span>
            <span>Subtotal</span>
          </div>
          <div className={classes['order-summary__product-details']}>
            <span>casual shoes - red, 36 × 3</span>
            <span>EGP1241</span>
          </div>
          <div className={classes['order-summary__product-details']}>
            <span>half boot crocodiele - havan, 38 × 2</span>
            <span>EGP700</span>
          </div>
          <div className={classes['order-summary__shipping']}>
            <span>Shipping</span>
            <span>EGP0.00</span>
          </div>
          <div className={classes['order-summary__tax']}>
            <span>Tax</span>
            <span>EGP0.00</span>
          </div>
          <div className={classes['order-summary__total']}>
            <span>Total</span>
            <span>EGP1234</span>
          </div>
          <Form>
            <div className={`my-3 ${classes['order-summary__form-check']}`}>
              <Form.Check
                name='payment'
                type='radio'
                id='cash'
                label='Cash on delivery'
                className='border-bottom p-2'
              />
              <Form.Check
                name='payment'
                type='radio'
                id='PayPal'
                label='Pay with PayPal.'
                className='p-2'
              />
            </div>
          </Form>
          <button>Place Order</button>
        </div>
      </div>
    </>
  );
};

export default Order;
