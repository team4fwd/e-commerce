import { useSelector } from 'react-redux';
import classes from './Cart.module.scss';
import CartProduct from '../components/cart/CartProduct';
import SectionTitle from '../components/SectionTitle';

const Cart = () => {
  const { items, totalAmount } = useSelector((state) => state);
  const hasItems = items.length > 0;
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
          {items.map((item) => (
            <CartProduct item={item} key={item.id} />
          ))}
        </div>
        {hasItems && (
          <div className={classes['cart-summary']}>
            <h2 className={classes['cart-summary__title']}>Cart totals</h2>
            <div className={classes['cart-summary__subtotal']}>
              <span>Subtotal</span>
              <span>EGP{totalAmount}</span>
            </div>
            <div className={classes['cart-summary__shipping']}>
              <span>Shipping</span>
              <span>EGP0.00</span>
            </div>
            <div className={classes['cart-summary__tax']}>
              <span>Tax</span>
              <span>EGP0.00</span>
            </div>
            <div className={classes['cart-summary__total']}>
              <span>Total</span>
              <span>EGP{totalAmount}</span>
            </div>
            <button>Proceed to checkout</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
