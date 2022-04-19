import Slider from '../../components/Home/Slider';
import Category from '../../components/Home/Category';
// import { products } from '../../DummyData';
import ProductItem from '../../components/Products/ProductItem';
import './HomePage.scss';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const { products, error } = useSelector((state) => state.products);
  console.log(products);
  return (
    <>
      <Slider />
      <Category />
      <div className='home__latest'>
        <h2 className='home__latest-title'>Latest Products</h2>
        {error && (
          <div className='alert alert-danger' role='alert'>
            {error}
          </div>
        )}
        <div className='products__items'>
          {products.map((product) => (
            <ProductItem
              key={product._id}
              title={product.productName}
              category={product.categoryName}
              price={product.price}
              img={product.images}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default HomePage;
