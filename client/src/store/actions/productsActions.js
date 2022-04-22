import {
  GetAllProductsAPI,
  GetCategoryAPI,
  GetProductsByCatAPI,
} from '../../util/API';

const ADD_PRODUCTS = 'ADD_PRODUCTS';
const ADD_CATEGORIES = 'ADD_CATEGORIES';
const ADD_PRODUCTS_FAILED = 'ADD_PRODUCTS_FAILED';
const ADD_CATEGORIES_FAILED = 'ADD_CATEGORIES_FAILED';

const addProducts = (products, msg = '') => ({
  type: ADD_PRODUCTS,
  products,
  msg,
});
const addCategories = (categories) => ({
  type: ADD_CATEGORIES,
  categories,
});

const getProductsFailed = (errMsg) => ({
  type: ADD_PRODUCTS_FAILED,
  errMsg,
});

const getCategoriesFailed = (errMsg) => ({
  type: ADD_CATEGORIES_FAILED,
  errMsg,
});

const getAllProducts =
  (product = '') =>
  async (dispatch) => {
    try {
      const products = await GetAllProductsAPI(product);
      if (!products || products.length === 0)
        throw new Error('No Products found!');

      if (products.status === false) throw new Error(products.message);

      dispatch(addProducts(products, product));
    } catch (err) {
      dispatch(getProductsFailed(err.message));
    }
  };

const getAllCategory = () => async (dispatch, getState) => {
  try {
    // const { token } = getState().user.userInfo;
    const categories = await GetCategoryAPI();
    if (!categories || categories.length === 0)
      throw new Error('No categories found!');

    if (categories.status === false) throw new Error(categories.message);

    dispatch(addCategories(categories));
  } catch (err) {
    dispatch(getCategoriesFailed(err.message));
  }
};

const getProductsByCategory = (cat) => async (dispatch) => {
  try {
    const products = await GetProductsByCatAPI(cat);
    if (!products || products.length === 0)
      throw new Error('No Products found!');

    if (products.status === false) throw new Error(products.message);

    dispatch(addProducts(products));
  } catch (err) {
    dispatch(getProductsFailed(err.message));
  }
};

export {
  ADD_PRODUCTS,
  ADD_CATEGORIES,
  ADD_PRODUCTS_FAILED,
  ADD_CATEGORIES_FAILED,
  getAllProducts,
  getAllCategory,
  getProductsByCategory,
};
