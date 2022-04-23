import { applyMiddleware, combineReducers, createStore } from 'redux';
import cartReducer from './reducers/cartReducer';
import userReducer from './reducers/userReducer';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import orderReducer from './reducers/orderReducer';
import productsReducer, { categoriesReducer } from './reducers/productsReducer';
import { loadingBarReducer } from 'react-redux-loading-bar';

const reducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  order: orderReducer,
  form: formReducer,
  loadingBar: loadingBarReducer,
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
