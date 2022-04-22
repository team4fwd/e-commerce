import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByCategory } from '../../store/actions/productsActions';

const ProductsTitle = ({ title, sortProduct }) => {
  const { categories } = useSelector((state) => state.categories);
  const [sort, setSort] = useState();
  const [filter, setFilter] = useState();
  const dispatch = useDispatch();

  const sortHandler = (e) => {
    setSort(e.target.value);
    sortProduct(e.target.value);
  };

  const filterHandler = (e) => {
    setFilter(e.target.value);
    dispatch(getProductsByCategory(e.target.value));
  };

  return (
    <div className='products__title'>
      <h2>{title}</h2>
      <div className='products__filter'>
        <select
          value={sort}
          onChange={sortHandler}
          className='products__filter-sort'
        >
          <option value='default'>Default Sort</option>
          <option value='priceASC'>by Price: low to high</option>
          <option value='priceDES'>by Price: high to low</option>
          <option value='latest'>Latest</option>
        </select>
        <select
          value={filter}
          onChange={filterHandler}
          className='products__filter-sort'
        >
          <option value=''>All Categories</option>
          {categories &&
            categories.map((cat) => (
              <option key={cat._id} value={cat.categoryName}>
                {cat.categoryName}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};
export default ProductsTitle;
