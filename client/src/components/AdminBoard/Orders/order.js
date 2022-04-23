import React, { useState, useEffect } from 'react';
import { GetAllOrdersAPI } from '../../../util/API';
import { useSelector } from 'react-redux';
import StatusOptions from './statusoptions';

import './order.css';
let Order = (props) => {
  const [ordersData, setOrdersData] = useState([]);
  const { token } = useSelector((state) => state.user.userInfo);
  useEffect(() => {
    GetAllOrdersAPI(token).then(async (data) => {
      await setOrdersData(data);
    });
  }, [token]);

  return (
    <>
      {ordersData.map((order, index) => (
        console.log(order),
        <tr key={index} id={order._id}>
          <td>{order._id}</td>
          <td>{order.name}</td>
          <td>{order.paymentMethod}</td>
          <td>{order.shippingInfo.address}</td>
          <td>{order.shippingInfo.phone}</td>
          <td>{order.totalPrice}</td>
          <td><StatusOptions order={order} id={order._id} token={token} orderStatus={order.orderStauts}/></td>

          
        </tr>
      ))}
    </>
  );
};

export default Order;
