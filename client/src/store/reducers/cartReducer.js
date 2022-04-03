import { ADD, REMOVE, REMOVEONE } from '../actions/cartActions';

const initialState = {
  items: [
    {
      id: 1,
      img: 'https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png',
      price: 100,
      name: 'Product1',
      color: 'red',
      size: 'M',
      amount: 2,
    },
    {
      id: 3,
      img: 'https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png',
      price: 100,
      name: 'Product2',
      color: 'red',
      size: 'M',
      amount: 2,
    },
  ],
  totalAmount: 400,
};

const cartReducer = (state = initialState, action) => {
  if (action.type === ADD) {
    const updatedTotalAmount = state.totalAmount + action.item.price;
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
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
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemIndex];
    const updatedTotalAmount =
      state.totalAmount - existingItem.price * existingItem.amount;

    const updatedItems = state.items.filter((item) => item.id !== action.id);

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (action.type === REMOVEONE) {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  return state;
};

export default cartReducer;
