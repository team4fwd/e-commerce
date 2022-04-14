import React from 'react';
import './ProductDetails.scss';
import { useState } from 'react';
import { productImages as images } from '../../DummyData';

const ProductDetails = () => {
  const [key, setKey] = useState(0);
  const [amount, setAmount] = useState(1);
  const quantity = 10;

  return (
    <div className='product'>
      <div className='product__images'>
        <div className='product__image'>
          <img src={images[key]} alt='' className='product__img' />
        </div>
        <div className='product__thumbnails'>
          {images.map((img, i) => (
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
        <h2 className='product__heading'>Awesome T-Shirt</h2>
        <span className='product__price'>EGP290</span>
        <p className='product__description'>
          Beautiful T-Shirt made of the finest materials, very lablabla
          lablabla. lablablalablabla lablabla lablabla lablabla lablabla
          lablabla lablabla
        </p>
        <div className='product__details'>
          <span>Status</span>
          <span>In Stock</span>
        </div>
        <div className='product__details'>
          <span>Category:</span>
          <span>casual</span>
        </div>
        <div className='product__details'>
          <span>Reviews</span>
          <span>8 reviews</span>
        </div>
        <div className='product__cta'>
          <div className='product__quantity'>
            <button
              onClick={() =>
                setAmount((val) => (val < quantity ? amount + 1 : val))
              }
            >
              +
            </button>
            <span>{amount}</span>
            <button
              onClick={() => setAmount((val) => (val > 1 ? amount - 1 : 1))}
            >
              -
            </button>
          </div>
          <button className='product__add-to-cart'>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
