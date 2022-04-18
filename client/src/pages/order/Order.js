import React, { useEffect } from 'react';
import classes from './Order.module.scss';
import CartProduct from '../../components/cart/CartProduct';
import { useDispatch, useSelector } from 'react-redux';
import { FaUser, FaTruck, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { addOrder, resetOrder } from '../../store/actions/orderActions';

const Order = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, totalAmount, shippingInfo, paymentMethod } = useSelector(
    (state) => state.cart
  );
  const { userInfo } = useSelector((state) => state.user);
  const { order, success, error } = useSelector((state) => state.order);

  const hasItems = items ? items.length > 0 : false;

  // Calculate Price
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  const itemsPrice = +totalAmount;
  const shippingPrice = addDecimals(itemsPrice > 100 ? 0 : 100);
  const taxPrice = addDecimals(0.14 * itemsPrice);

  const totalPrice = (+itemsPrice + +shippingPrice + +taxPrice).toFixed(2);

  useEffect(() => {
    if (success) {
      navigate(`/order/${order?.id}`);
      dispatch(resetOrder());
    }
  }, [navigate, dispatch, success, order]);

  const placeOrderHandler = () => {
    dispatch(
      addOrder({
        orderItems: items,
        shippingInfo,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      })
    );
  };

  return (
    <>
      <div className='container'>
        <div className={`row  ${classes['order-detail']}`}>
          <div className='col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0'>
            <div className='row '>
              <div className='col-md-4 center'>
                <div className={`alert-success ${classes['order-box']}`}>
                  <FaUser />
                </div>
              </div>
              <div className='col-md-8 center'>
                <h5>
                  <strong>Customer</strong>
                </h5>
                <p>{`${userInfo.firstName} ${userInfo.lastName}`}</p>
                <p>{userInfo.email}</p>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className='col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0'>
            <div className='row'>
              <div className='col-md-4 center'>
                <div className={`alert-success ${classes['order-box']}`}>
                  <FaTruck />
                </div>
              </div>
              <div className='col-md-8 center'>
                <h5>
                  <strong>Order info</strong>
                </h5>
                <p>Shipping: {shippingInfo.country}</p>
                <p>Pay method: {paymentMethod}</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0'>
            <div className='row'>
              <div className='col-md-4 center'>
                <div className={`alert-success ${classes['order-box']}`}>
                  <FaMapMarkerAlt />
                </div>
              </div>
              <div className='col-md-8 center'>
                <h5>
                  <strong>Deliver to</strong>
                </h5>
                <p>
                  Address: {shippingInfo.city},{shippingInfo.address},
                  {shippingInfo.zip}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes['order-card']}>
          <div className={classes['order-products']}>
            <div className={classes['order-products__title']}>
              <span>Product</span>
              <span>Quantity</span>
              <span>subtotal</span>
              <span></span>
            </div>
            {items &&
              items.map((item) => (
                <CartProduct order item={item} key={item.id} />
              ))}
          </div>
          <div className={classes['order-summary']}>
            <h2 className={classes['order-summary__title']}>Your order</h2>
            <div className={classes['order-summary__product']}>
              <span>Products</span>
              <span>{`EGP${itemsPrice}`}</span>
            </div>
            <div className={classes['order-summary__shipping']}>
              <span>Shipping</span>
              <span>{`EGP${shippingPrice}`}</span>
            </div>
            <div className={classes['order-summary__tax']}>
              <span>Tax</span>
              <span>{`EGP${taxPrice}`}</span>
            </div>
            <div className={classes['order-summary__total']}>
              <span>Total</span>
              <span>{`EGP${totalPrice}`}</span>
            </div>
            {hasItems && (
              <button onClick={placeOrderHandler}>PLACE ORDER</button>
            )}
            {error && (
              <div className='my-3 col-12'>
                <div className={`alert alert-danger`}>{error}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
