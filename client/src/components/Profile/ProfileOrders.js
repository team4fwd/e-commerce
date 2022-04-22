import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { GetOrdersAPI } from "../../util/API";
import { useSelector } from 'react-redux';


const ProfileOrders = () => {

  const [orders, setOrders] = useState([]);
  const { token } = useSelector((state) => state.user.userInfo);

  useEffect(() => {

      GetOrdersAPI(token).then((data) => {
          setOrders(data);

      })
  }, [token]);
  return (
    <Table hover className="orderPro">
      <thead>
        <tr>
          <th>ID</th>
          <th>NUMBER OF ITEMS</th>
          <th>ORDER STATUS</th>
          <th>DATE</th>
          <th>PAYMENT METHOD</th>
          <th>TOTAL PRICE</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index)=> 
         <tr key={index}>
          <td>{order._id}</td>
          <td>{order.orderItems.length}</td>
          <td>{order.orderStauts}</td>
          <td>{order.createdAt}</td>
          <td>{order.paymentMethod}</td>
          <td>{order.totalPrice}</td>


        </tr>)
       }
       
      </tbody>
    </Table>
  );
};

export default ProfileOrders;
