
import React from 'react'
import "../prodAndCteg-List.scss"
import Product from './product';
import { Link } from 'react-router-dom';
let Products = () => {
  return (
    <div className='prodAndCteg-List'>
      <div className='prodAndCteg-List__titleContainer'>
        <h3 className='prodAndCteg-List__title'>Products List</h3>
        <Link to='addProduct'>
          <button className='prodAndCteg-List__add-btn'>Add product</button>
        </Link>
      </div>
      <div className='prodAndCteg-List__table'>
        <table className="table table-striped table-hover table-responsive">
          <thead>
            <tr>
              <th className='Same-line'>Product name</th>
              <th className='Same-line'>Category name</th>
              <th >Descriptions</th>
              <th >Price</th>
              <th >Quantity</th>
              {/* <th >Images</th> */}
              {/* <th >Editing</th> */}

            </tr>
          </thead>
          <tbody>

            <Product />

          </tbody>
        </table>
      </div></div>
  )
}


export default Products;