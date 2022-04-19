import { ADD_PRODUCTS, ADD_PRODUCTS_FAILED } from '../actions/productsActions';

const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return { products: action.products };
    case ADD_PRODUCTS_FAILED:
      return { error: action.errMsg };
    default:
      return state;
  }
};

export default productsReducer;
