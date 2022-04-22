import React from 'react';
import '../prodAndCteg-List.scss';
import Order from './order';
const AllOrders = () => {
  return (
    <div className='prodAndCteg-List'>
      <div className='prodAndCteg-List__titleContainer'>
        <h3 className='prodAndCteg-List__title'>Orders List</h3>
       
      </div>
      <div className='prodAndCteg-List__table'>
        <table className='orderadminT table table-striped table-hover table-responsive'>
          <thead>
            <tr>
              <th className='Same-line'>Order ID</th>
              <th className='Same-line'>Paymment Method</th>
              {/* <th>Customer ID</th> */}
              <th>Amount</th>
              <th>Status</th>
              <th>change Status</th>
            </tr>
          </thead>
          <tbody>
            <Order/>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrders;
