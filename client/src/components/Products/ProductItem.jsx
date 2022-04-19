import { BsFillBagPlusFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addItemsToCart } from '../../store/actions/cartActions';

const ProductItem = ({ img, title, price, category }) => {
  console.log(img);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      addItemsToCart({
        id: Date.now(),
        img: img[1].url,
        price,
        name: title,
        color: 'red',
        size: 'M',
        amount: 1,
      })
    );
  };
  return (
    <div className='products__item'>
      <figure className='products__imgs'>
        <img src={img[0].url} alt='' className='products__img-back' />
        <img src={img[1].url} alt='' className='products__img-front' />
      </figure>
      <figcaption className='products__caption'>
        <h4>{title}</h4>
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
