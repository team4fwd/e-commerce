import { AddOrderAPI } from '../../util/API';
import { clearCart } from './cartActions';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

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
    dispatch(showLoading());
    const { token } = getState().user.userInfo;
    const data = await AddOrderAPI(order, token);
    if (data.order) {
      dispatch(add(data.order));
      dispatch(clearCart());
      localStorage.removeItem('cartItems');
    }
    dispatch(hideLoading());
    if (data?.status === false) {
      throw new Error(data.message);
    }
  } catch (err) {
    dispatch(fail(err.message));
  }
};

export { ADD_ORDER, ADD_ORDER_FAILED, RESET_ORDER, addOrder, resetOrder };
