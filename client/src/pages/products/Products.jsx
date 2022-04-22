import { useState } from 'react';
import ProductItem from '../../components/Products/ProductItem';
import ProductsTitle from '../../components/Products/ProductsTitle';
import './Products.scss';
import Pagination from '@mui/material/Pagination';
import usePagination from '../../util/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllProducts,
  getProductsByCategory,
} from '../../store/actions/productsActions';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Products = () => {
  window.scrollTo(0, 0);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('default');
  const { product } = useParams();
  const dispatch = useDispatch();
  const { products, message, error } = useSelector((state) => state.products);
  let sortedProducts = !error ? products.map((p) => ({ ...p })) : [];
  let title = message ? message : 'All Products';

  useEffect(() => {
    dispatch(getAllProducts(product));
  }, [dispatch, product]);

  const getProductsHandler = (e) => {
    dispatch(getProductsByCategory(''));
  };

  if (sort === 'priceASC')
    sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
  if (sort === 'priceDES')
    sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
  if (sort === 'latest')
    sortedProducts = sortedProducts.sort((a, b) => {
      const bDate = new Date(b.createdAt).getTime();
      const aDate = new Date(a.createdAt).getTime();
      return bDate - aDate;
    });

  const PER_PAGE = 8;
  const displayedProducts = usePagination(sortedProducts, PER_PAGE);

  if (error) {
    return (
      <div className='product__loading d-flex flex-column'>
        <div className='alert alert-danger' role='alert'>
          {error}
        </div>
        <button className='btn btn-secondary' onClick={getProductsHandler}>
          All Products
        </button>
      </div>
    );
  }

  const count = Math.ceil(products.length / PER_PAGE);

  const handleChange = (_, p) => {
    setPage(p);
    displayedProducts.jump(p);
  };

  return (
    <div className='products'>
      <ProductsTitle sortProduct={setSort} title={title} />
      {error && (
        <div className='alert alert-danger' role='alert'>
          {error}
        </div>
      )}
      <div className='products__items'>
        {displayedProducts.currentData().map((product) => (
          <ProductItem
            key={product._id}
            id={product._id}
            title={product.productName}
            category={product.categoryName}
            price={product.price}
            img={product.images}
          />
        ))}
      </div>
      <div className='products__pagination'>
        <Pagination
          className='products__pagination-btns'
          count={count}
          size='large'
          page={page}
          showFirstButton
          showLastButton
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
export default Products;
