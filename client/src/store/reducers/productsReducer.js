import {
  ADD_CATEGORIES,
  ADD_CATEGORIES_FAILED,
  ADD_PRODUCTS,
  ADD_PRODUCTS_FAILED,
} from '../actions/productsActions';

const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return { products: action.products, message: action.msg };
    case ADD_PRODUCTS_FAILED:
      return { error: action.errMsg };
    default:
      return state;
  }
};

export const categoriesReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_CATEGORIES:
      return { categories: action.categories };
    case ADD_CATEGORIES_FAILED:
      return { error: action.errMsg };
    default:
      return state;
  }
};

export default productsReducer;
