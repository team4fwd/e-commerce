import { AddOrderAPI } from '../../util/API';
import { clearCart } from './cartActions';

const ADD_ORDER = 'ADD_ORDER';
const ADD_ORDER_FAILED = 'ADD_ORDER_FAILED';
const RESET_ORDER = 'RESET_ORDER';

const add = (order) => ({
  type: ADD_ORDER,
  order,
});

const fail = (msg) => ({
  type: ADD_ORDER_FAILED,
  msg,
});

const resetOrder = () => ({
  type: RESET_ORDER,
});

const addOrder = (order) => async (dispatch, getState) => {
  try {
    const { _id: userId } = getState().user.userInfo;
    console.log({ userId, ...order });
    const data = await AddOrderAPI(userId, order);
    console.log(data);
    if (data) {
      dispatch(add(data));
      dispatch(clearCart());
      localStorage.removeItem('cartItems');
    }
    if (data?.status === false) {
      throw new Error(data.message);
    }
  } catch (err) {
    dispatch(fail(err.message));
  }
};

export { ADD_ORDER, ADD_ORDER_FAILED, RESET_ORDER, addOrder, resetOrder };
