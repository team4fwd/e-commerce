import Slider from '../../components/Home/Slider';
import Category from '../../components/Home/Category';
import { products } from '../../DummyData';
import ProductItem from '../../components/Products/ProductItem';
import './HomePage.scss';

const HomePage = () => {
  return (
    <>
      <Slider />
      <Category />
      <div className='home__latest'>
        <h2 className='home__latest-title'>Latest Products</h2>
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
