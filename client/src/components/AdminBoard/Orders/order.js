import React, { useState, useEffect } from 'react';
import { DeleteAPI, GetAllOrdersAPI, EditOrderStatus } from '../../../util/API';
import { useSelector } from 'react-redux';
import StatusOptions from './statusoptions';

import './order.css'
let Order = (props) => {

  const [ordersData, setOrdersData] = useState([]);
  const { token } = useSelector((state) => state.user.userInfo);
  const orderStatus = ['Inprogress', 'Shipped', 'In The Way', 'Delivered', 'Canceled'];
  useEffect(() => {
    GetAllOrdersAPI(token).then((data) => {
      setOrdersData(data)
    });
  }, [token]);


  return (
    <>

      {ordersData.map((order, index) => (
        <tr key={index} id={order._id}>
          <td>{order._id}</td>
          <td>{order.paymentMethod}</td>
          {/* <td>{order.user_id}</td> */}
          <td>{order.totalPrice}</td>
          <td><p className={`orderStatus ${order.orderStauts}`}>{order.orderStauts}</p></td>
          <td><StatusOptions order={order} id={order._id} token={token}/></td>

          
        </tr>
      ))}
    </>
  );
};

export default Order;
