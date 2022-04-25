import React, { useState, useEffect } from 'react';
import { DeleteAPI, GetAllProductsAPI } from '../../../util/API';
import { MdDeleteOutline } from 'react-icons/md';
import '../prodAndCteg-List.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loadingpage from '../../../util/loading/Loading'

let Product = (props) => {
  const [productsData, setProductsData] = useState([]);
  const { token } = useSelector((state) => state.user.userInfo);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    GetAllProductsAPI().then((data) => {
      setProductsData(data);
      setLoading(false);

    });
  }, []);

  function DeleteOperation(id) {
    DeleteAPI(id, 'products', token);

    GetAllProductsAPI().then((data) => {
      setProductsData(data);
    });
  }

  return (
   <> {loading ? (
      <Loadingpage />

    ) : (
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
    </>)}
    </>
  );
};

export default Product;
