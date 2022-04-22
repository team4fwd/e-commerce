import { useState } from 'react';
import ProductItem from '../../components/Products/ProductItem';
import ProductsTitle from '../../components/Products/ProductsTitle';
import './Products.scss';
import Pagination from '@mui/material/Pagination';
import usePagination from '../../util/Pagination';
import { useSelector } from 'react-redux';

const Products = () => {
  window.scrollTo(0, 0);
  const [page, setPage] = useState(1);
  const { products, error } = useSelector((state) => state.products);

  const PER_PAGE = 8;

  const count = Math.ceil(products.length / PER_PAGE);
  const displayedProducts = usePagination(products, PER_PAGE);

  const handleChange = (_, p) => {
    setPage(p);
    displayedProducts.jump(p);
  };

  return (
    <div className='products'>
      <ProductsTitle title='All Products' />
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
          // variant='outlined'
          // shape='rounded'
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
export default Products;
