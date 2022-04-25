import React from 'react';
import './ProductDetails.scss';
import { useState } from 'react';
import { FaIndent } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addItemsToCart } from '../../store/actions/cartActions';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Comments from '../../components/comment/Comments';

const ProductDetails = () => {
  const [key, setKey] = useState(0);
  const [amount, setAmount] = useState(1);
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { products, error } = useSelector((state) => state.products);
  const product = products.find((product) => product._id === productId);

  const {
    quantity,
    _id: id,
    price,
    productName: name,
    categoryName: cat,
    descriptions,
  } = product;

  const [stock, setStock] = useState(quantity);

  if (error) {
    <div className='product__loading'>
      <div className='alert alert-danger' role='alert'>
        {error}
      </div>
    </div>;
  }

  if (!product) {
    return (
      <div className='product__loading'>
        <CircularProgress className='product__loading-spinner' />
      </div>
    );
  }

  let productImages = product.images.map((image) => image.url);
  productImages = productImages.concat(
    Array(5 - productImages.length).fill(productImages[0])
  );

  const addToCartHandler = () => {
    dispatch(
      addItemsToCart({
        product_id: id,
        img: productImages[0],
        price,
        name,
        amount,
      })
    );
    setStock((state) => state - amount);
    setAmount(0);
  };

  return (
    <>
      <div className='product'>
        <div className='product__images'>
          <div className='product__image'>
            <img src={productImages[key]} alt='' className='product__img' />
          </div>
          <div className='product__thumbnails'>
            {productImages.map((img, i) => (
              <div key={i} className='product__thumbnail'>
                <img
                  src={img}
                  alt=''
                  onClick={() => setKey(i)}
                  className={`product__thumbnail-img ${
                    key === i ? 'selected' : ''
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className='product__info'>
          <p>{`Home / ${cat}`}</p>
          <h2 className='product__heading'>{name}</h2>
          <span className='product__price'>{`EGP${price}`}</span>

          <div className='product__details'>
            <span>Status:</span>
            <span>{stock > 0 ? `In Stock(${stock})` : 'Out of Stock'}</span>
          </div>
          <div className='product__details'>
            <span>Category:</span>
            <span>{cat}</span>
          </div>
          <div className='product__details'>
            <span>Reviews:</span>
            <span>8 reviews</span>
          </div>
          <div className='product__cta'>
            <div className='product__quantity'>
              <button
                onClick={() =>
                  setAmount((val) => (val < stock ? amount + 1 : val))
                }
              >
                +
              </button>
              <span>{amount}</span>
              <button
                onClick={() => setAmount((val) => (val > 1 ? amount - 1 : 0))}
              >
                -
              </button>
            </div>
            <button onClick={addToCartHandler} className='product__add-to-cart'>
              Add to cart
            </button>
          </div>
          <h3 className='product__detail-heading'>
            Product Details
            <FaIndent className='product__icon' />
          </h3>
          <p className='product__description'>{descriptions}</p>
        </div>
      </div>
      <Comments productId={productId} />
    </>
  );
};

export default ProductDetails;
