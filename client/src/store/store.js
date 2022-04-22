import { applyMiddleware, combineReducers, createStore } from 'redux';
import cartReducer from './reducers/cartReducer';
import userReducer from './reducers/userReducer';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import orderReducer from './reducers/orderReducer';
import productsReducer, { categoriesReducer } from './reducers/productsReducer';

const reducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  order: orderReducer,
  form: formReducer,
});

const userInfo = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const cartItems = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : { items: [], totalAmount: 0 };

const shippingInfo = localStorage.getItem('shippingInfo')
  ? JSON.parse(localStorage.getItem('shippingInfo'))
  : null;

const paymentMethod = localStorage.getItem('paymentMethod')
  ? JSON.parse(localStorage.getItem('paymentMethod'))
  : null;

// const cartItems = {
//   items: [
//     {
//       id: 1,
//       img: 'https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png',
//       price: 100,
//       name: 'Product1',
//       color: 'red',
//       size: 'M',
//       amount: 2,
//     },
//     {
//       id: 3,
//       img: 'https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png',
//       price: 100,
//       name: 'Product2',
//       color: 'red',
//       size: 'M',
//       amount: 2,
//     },
//   ],
//   totalAmount: 400,
// };

const initialState = {
  user: { userInfo },
  cart: {
    ...cartItems,
    shippingInfo,
    paymentMethod,
  },
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
