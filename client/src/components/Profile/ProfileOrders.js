import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { GetOrdersAPI } from "../../API";


const ProfileOrders = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {

      GetOrdersAPI().then((data) => {
          console.log(data)

      })
  }, []);
  return (
    <Table hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>STATUS</th>
          <th>DATE</th>
          <th>TOTAL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>62485c9abda8879542128c58</td>
          <td>Paid</td>
          <td>4/4/2020 at 4:24 PM</td>
          <td>EGP1147.7</td>
        </tr>
        <tr className='table-danger'>
          <td>62485c9abda8879542128c58</td>
          <td>Not Paid</td>
          <td>Last Saturday at 4:24 PM</td>
          <td>EGP1147</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ProfileOrders;
