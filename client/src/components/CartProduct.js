import React from 'react';
import { useDispatch } from 'react-redux';
import {
  addItemsToCart,
  removeItemsFromCart,
  removeOneItemFromCart,
} from '../store/actions/cartActions';
import classes from './CartProduct.module.scss';

const CartProduct = ({ item }) => {
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(
      addItemsToCart({
        ...item,
        amount: 1,
      })
    );
  };

  const removeOneItemHandler = () => {
    dispatch(removeOneItemFromCart(item.id));
  };

  const removeItemHandler = () => {
    dispatch(removeItemsFromCart(item.id));
  };
  return (
    <div className={classes['cart-products__details']}>
      <div className={classes['cart-products__info']}>
        <img src={item.img} alt={item.name} />
        <div className={classes['cart-products__info__text']}>
          <span>
            {item.name} - {item.color}, {item.size}
          </span>
          <span>EGP{item.price}</span>
        </div>
      </div>
      <div className={classes['cart-products__quantity']}>
        <button onClick={addItemHandler}>+</button>
        <span>{item.amount}</span>
        <button onClick={removeOneItemHandler}>-</button>
      </div>
      <div>EGP{item.amount * item.price}</div>
      <div onClick={removeItemHandler}>X</div>
    </div>
  );
};

export default CartProduct;
