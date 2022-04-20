import { GetAllProductsAPI } from '../../util/API';

const ADD_PRODUCTS = 'ADD_PRODUCTS';
const ADD_PRODUCTS_FAILED = 'ADD_PRODUCTS_FAILED';

const addProducts = (products) => ({
  type: ADD_PRODUCTS,
  products,
});

const getProductsFailed = (errMsg) => ({
  type: ADD_PRODUCTS_FAILED,
  errMsg,
});

const getAllProducts = () => async (dispatch) => {
  try {
    const products = await GetAllProductsAPI();
    if (!products || products.length === 0)
      throw new Error('No Products found!');

    if (products.status === false) throw new Error(products.message);

    dispatch(addProducts(products));
  } catch (err) {
    dispatch(getProductsFailed(err.message));
  }
};

export { ADD_PRODUCTS, ADD_PRODUCTS_FAILED, getAllProducts };
