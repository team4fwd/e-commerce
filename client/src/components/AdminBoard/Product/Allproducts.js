import React from 'react'
import Product from './product';
let Products = () => {
    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">Product name</th>
                    <th scope="col">Category name</th>
                    <th scope="col">Descriptions</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Images</th>
                    <th scope="col">Editing</th>

                </tr>
            </thead>
            <tbody>

               <Product/>
               
            </tbody>
        </table>
    )
}


export default Products;