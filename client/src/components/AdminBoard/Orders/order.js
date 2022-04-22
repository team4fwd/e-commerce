import React, { useState, useEffect } from 'react';
import { DeleteAPI, GetAllOrdersAPI } from '../../../util/API';
import { useSelector } from 'react-redux';

let Order = (props) => {
  const [ordersData, setOrdersData] = useState([]);
  const { token } = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    GetAllOrdersAPI(token).then((data) => {
      setOrdersData(data)
    });
  }, [token]);

  // function DeleteOperation(id) {
  //   DeleteAPI(id, 'cateogry', token);

  //   GetAllOrdersAPI(token).then((data) => {
  //     setOrdersData(data);
  //   });
  // }





  return (
    console.log(ordersData),
    <>
  
      {/* {ordersData.map((order, index) => (
        <tr key={index}>
          <td>{order._id}</td>
          <td>{order.paymentMethod}</td>
          <td>{order.user_id}</td>
          <td>{order.totalPrice}</td>
          <td>{order.orderStauts}</td>
          <td></td>

          <td>
            <div className='prodAndCteg-List__bottons'>
          
              <MdDeleteOutline
                className='prodAndCteg-List__delete'
                onClick={() => DeleteOperation(product._id)}
              />
            </div>
          </td>
        </tr>
      ))} */}
    </>
  );
};

export default Order;
