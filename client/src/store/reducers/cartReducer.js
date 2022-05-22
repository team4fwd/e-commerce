import {
  ADD,
  ADD_ADDRESS,
  ADD_PAYMENT,
  REMOVE,
  REMOVEONE,
  CLEAR_CART,
} from '../actions/cartActions';

const cartReducer = (state = { items: [], totalAmount: 0 }, action) => {
  if (action.type === ADD) {
    const updatedTotalAmount = state.totalAmount + action.item.price;
    const existingItemIndex = state.items.findIndex(
      (item) => item.product_id === action.item.product_id
    );
    const existingItem = state.items[existingItemIndex];

    let updatedItems;

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === REMOVE) {
    const existingItemIndex = state.items.findIndex(
      (item) => item.product_id === action.product_id
    );
    const existingItem = state.items[existingItemIndex];
    const updatedTotalAmount =
      state.totalAmount - existingItem.price * existingItem.amount;

    const updatedItems = state.items.filter(
      (item) => item.product_id !== action.product_id
    );

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (action.type === REMOVEONE) {
    const existingItemIndex = state.items.findIndex(
      (item) => item.product_id === action.product_id
    );
    const existingItem = state.items[existingItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(
        (item) => item.product_id !== action.product_id
      );
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (action.type === ADD_ADDRESS) {
    return {
      ...state,
      shippingInfo: action.info,
    };
  }

  if (action.type === ADD_PAYMENT) {
    return {
      ...state,
      paymentMethod: action.method,
    };
  }

  if (action.type === CLEAR_CART) {
    return { items: [], totalAmount: 0 };
  }

  return state;
};

export default cartReducer;
