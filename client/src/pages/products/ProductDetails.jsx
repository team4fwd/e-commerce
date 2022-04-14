import React from 'react';
import './ProductDetails.scss';
import { useState } from 'react';
import { productImages as images } from '../../DummyData';
import { FaIndent } from 'react-icons/fa';

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
        <p>Home / Calvin Klein Jeans</p>
        <h2 className='product__heading'>Men Brown Polo Collar T-shirt</h2>
        <span className='product__price'>EGP290</span>

        <div className='product__details'>
          <span>Status:</span>
          <span>In Stock</span>
        </div>
        <div className='product__details'>
          <span>Category:</span>
          <span>casual</span>
        </div>
        <div className='product__details'>
          <span>Reviews:</span>
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
        <h3 className='product__detail-heading'>
          Product Details
          <FaIndent className='product__icon' />
        </h3>
        <p className='product__description'>
          Brown Tshirt for men Solid Regular length Polo collar Short, regular
          sleeves Knitted cotton fabric Button closure
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
