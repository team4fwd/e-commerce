import { BsFillBagPlusFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addItemsToCart } from '../../store/actions/cartActions';

const ProductItem = ({ id, img, title, price, category }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showProductHandler = (e) => {
    navigate(`/products/${id}`);
  };

  const addToCartHandler = () => {
    dispatch(
      addItemsToCart({
        id,
        img: img[0].url,
        price,
        name: title,
        amount: 1,
      })
    );
  };
  return (
    <div className='products__item'>
      <figure onClick={showProductHandler} className='products__imgs'>
        <img src={img[0].url} alt='' className='products__img-back' />
        <img src={img[1].url} alt='' className='products__img-front' />
      </figure>
      <figcaption className='products__caption'>
        <h4 onClick={showProductHandler}>{title}</h4>
        <div className='products__caption-details'>
          <div className=''>
            <p>{category}</p>
            <p>{`EGP${price}`}</p>
          </div>
          <BsFillBagPlusFill
            onClick={addToCartHandler}
            className='products__cart-icon'
          />
        </div>
      </figcaption>
    </div>
  );
};
export default ProductItem;
