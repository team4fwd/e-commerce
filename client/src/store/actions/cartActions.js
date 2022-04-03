const ADD = 'ADD';
const REMOVE = 'REMOVE';
const REMOVEONE = 'REMOVEONE';

const addItemsToCart = (item) => ({
  type: ADD,
  item,
});

const removeItemsFromCart = (id) => ({
  type: REMOVE,
  id,
});

const removeOneItemFromCart = (id) => ({
  type: REMOVEONE,
  id,
});

export {
  ADD,
  REMOVE,
  REMOVEONE,
  addItemsToCart,
  removeItemsFromCart,
  removeOneItemFromCart,
};
