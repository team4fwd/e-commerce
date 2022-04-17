const ADD = 'ADD';
const REMOVE = 'REMOVE';
const REMOVEONE = 'REMOVEONE';
const ADD_ADDRESS = 'ADD_ADDRESS';
const ADD_PAYMENT = 'ADD_PAYMENT';
const CLEAR_CART = 'CLEAR_CART';

const addItemsToCart = (item) => (dispatch, getState) => {
  dispatch({
    type: ADD,
    item,
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart));
};

const removeItemsFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: REMOVE,
    id,
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart));
};

const removeOneItemFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: REMOVEONE,
    id,
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart));
};

const addShippingAddress = (info) => (dispatch) => {
  dispatch({
    type: ADD_ADDRESS,
    info,
  });

  localStorage.setItem('shippingInfo', JSON.stringify(info));
};

const addPaymentMethod = (method) => (dispatch) => {
  dispatch({
    type: ADD_PAYMENT,
    method,
  });

  localStorage.setItem('paymentMehod', JSON.stringify(method));
};

const clearCart = () => ({
  type: CLEAR_CART,
});

export {
  ADD,
  REMOVE,
  REMOVEONE,
  ADD_ADDRESS,
  ADD_PAYMENT,
  CLEAR_CART,
  addItemsToCart,
  removeItemsFromCart,
  removeOneItemFromCart,
  addShippingAddress,
  addPaymentMethod,
  clearCart,
};
