import { useSelector } from 'react-redux';
import classes from './Cart.module.scss';
import CartProduct from '../../components/cart/CartProduct';
import SectionTitle from '../../components/SectionTitle';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { items, totalAmount } = useSelector((state) => state.cart);

  const hasItems = items ? items.length > 0 : false;

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <SectionTitle title='Cart' />
      <div className={classes['cart-card']}>
        <div className={classes['cart-products']}>
          <div className={classes['cart-products__title']}>
            <span>Product</span>
            <span>Quantity</span>
            <span>subtotal</span>
            <span></span>
          </div>
          {items &&
            items.map((item) => <CartProduct item={item} key={item.id} />)}
        </div>
        {hasItems && (
          <div className={classes['cart-summary']}>
            <h2 className={classes['cart-summary__title']}>Cart Summary</h2>
            <Form onSubmit={submitHandler}>
              <InputGroup className={classes['cart-summary__coupon-input']}>
                <Form.Control
                  // onChange={(e) => setAddress(e.target.value)}
                  // value={}
                  placeholder='Coupon Code'
                />
                <Button variant='outline-secondary' id='button-addon2'>
                  APPLY
                </Button>
              </InputGroup>
            </Form>
            <div className={classes['cart-summary__subtotal']}>
              <span>Subtotal</span>
              <span>EGP{totalAmount}</span>
            </div>
            <div className={classes['cart-summary__coupon']}>
              <span>Coupon</span>
              <span>-EGP0.00</span>
            </div>
            <div className={classes['cart-summary__total']}>
              <span>Total</span>
              <span>EGP{totalAmount}</span>
            </div>
            <button className={classes['cart-summary__btn']}>
              <Link className='route-link' to='/login?redirect=shipping'>
                Proceed to checkout
              </Link>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
