import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import './order.css'



let StatusOptions = (props) => {

  const { token } = useSelector((state) => state.user.userInfo);
  
  const statusOfOrder = props.order.orderStauts
  const id = props.id
  const [orderStauts, setOrderStautsData] = useState(statusOfOrder);
  
  const statusData = [
    {
      name: "orderStauts",
      value: 1,
      label: "Inprogress",
      isdisabled: (orderStauts != "Inprogress"?true :false),

    },
    {
      name: "orderStauts",
      value: 2,
      label: "Shipped",
      isdisabled: (orderStauts == "Inprogress" ?false :true)
    },
    {
      name: "orderStauts",
      value: 3,
      label: "Canceled",
      isdisabled: (orderStauts == "Inprogress"?false :true)
    },
    {
      name: "orderStauts",
      value: 4,
      label: "In The Way",
      isdisabled: (orderStauts == "Shipped"?false :true)
    },
    {
      name: "orderStauts",
      value: 5,
      label: "Delivered",
      isdisabled: (orderStauts == "In The Way"?false :true)
    },

  ];
  const [statusDataChange, setstatusDataChange]= useState(statusData);
  
  var status
  if (orderStauts == statusOfOrder) {
    status = statusOfOrder;
  } else {
    status = orderStauts.label;
  }

  const handleChange = async (event) => {
    const changeStatus = event.label;
    fetch("https://e-commerce-fwd.herokuapp.com/order/" + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token,
      },

      body: JSON.stringify({ orderStauts: changeStatus }),
    })
      .then((res) => res.json())
      .then(
        (data) => {
          if (data.status === true) {
            setOrderStautsData(event);
            
            window.location.reload();
          } else {
            alert(data.message)
          }
        }
      )

  }
  return (
    <div>
      <p className={`orderStatus ${status}`}>{status}</p>
      <Select
        placeholder="change status"
        value={orderStauts} // set selected value
        options={statusDataChange} // set list of the data
        onChange={handleChange} // assign onChange function
        isOptionDisabled={(option) => option.isdisabled} // disable an option

      />
    </div>

  )

}

export default StatusOptions;
