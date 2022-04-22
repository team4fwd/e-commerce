import React, { useState } from 'react';
import {EditOrderStatus } from '../../../util/API';
import { useSelector } from 'react-redux';



let StatusOptions = (props) => {

  const { token } = useSelector((state) => state.user.userInfo);
  const orderStatus = ['Inprogress', 'Shipped', 'In The Way', 'Delivered', 'Canceled'];
  const statusOfOrder = props.order.orderStauts
  const id = props.id
  const [orderStauts, setOrderStautsData] = useState(statusOfOrder);

  return (

    <select
    className='selectpicker'
    value={orderStauts}
      name='orderStauts'
      onChange={async (event) => {await setOrderStautsData(event.target.value);
       await EditOrderStatus(id, event.target.value, token);
       window.location.reload();
      }
      } >{orderStatus.map((status, index) => 
      <option
      data-content="<span className={`orderStatus ${status}`}>{status}</span>"
        key={index}
        value={status}
      >
        {status}
      </option>)}</select>
      )
    
}

export default StatusOptions;
