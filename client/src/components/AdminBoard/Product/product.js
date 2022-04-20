import React, { useState, useEffect } from 'react';
import { GetProductAPI } from '../../../util/API';
import { MdDeleteOutline } from 'react-icons/md';
import '../prodAndCteg-List.scss';
import { Link } from 'react-router-dom';

let Product = (props) => {
  // const categories = GetProductAPI().then((data) => data)
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    GetProductAPI().then((data) => {
      setProductsData(data);
    });
  }, []);

  function DeleteOperation(id) {
    fetch('https://e-commerce-fwd.herokuapp.com/products/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },

      body: null,
    }).then((res) => res.json());

    GetProductAPI().then((data) => {
      setProductsData(data);
    });
  }

  return (
    <>
      {productsData.map((product, index) => (
        <tr key={index}>
          <td>{product.productName}</td>
          <td>{product.categoryName}</td>
          <td>{product.descriptions}</td>
          <td>{product.price}</td>
          <td>{product.quantity}</td>
          <td></td>

          <td>
            <div className='prodAndCteg-List__bottons'>
              <Link to={'updateProduct/' + product._id}>
                <button className='prodAndCteg-List__edit'>Edit</button>
              </Link>
              <MdDeleteOutline
                className='prodAndCteg-List__delete'
                onClick={() => DeleteOperation(product._id)}
              />
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default Product;
