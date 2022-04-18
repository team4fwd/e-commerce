import React from 'react'
import ProductImg from '../../assets/images/Product-quote-image.jpeg';
import './product.css'
function ProductQuote() {
  return (
    <section className="product-quote__section">
        <div className="container py-5">
            <div className="row g-0 justify-content-center">
                <div className="offset-1 col-md-5 product-quote__leftSide py-5 px-5">
                    <h2 className='fw-bolder mb-5 lh-1'>Well designed and well Printed only for you</h2>
                    <p className='fs-5'>You can never take too much care over the choice of your shoes. 
                        Too many women think that they are unimportant, but the real proof of an elegant 
                        woman is what is on her feet
                    </p>
                </div>
                <div className="col-md-5 product-quote__rightSide position-relative">
                    <div className="product-quote__rightSide__img">
                       <img src={ProductImg} alt="ProductQuote" className='w-100'/>    
                    </div>
                    <div className="product-quote__price-discount position-absolute">
                        <h3 className='text-capitalize text-white'>hot discount - 70% <span className='text-uppercase'>off</span></h3>
                        <p className='text-white'>best offer for our most beloved customers.</p>
                        <button className='btn btn-secondary text-capitalize py-3 px-4'> find out more</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductQuote