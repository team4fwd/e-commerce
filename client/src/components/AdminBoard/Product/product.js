import React, { useState, useEffect }  from "react";
import { GetProductAPI } from '../../../API';



let Product = () => {


// const categories = GetProductAPI().then((data) => data)
const [productsData, setProductsData] = useState([]);

useEffect(() => {
    GetProductAPI().then((data) => {
        setProductsData(data);
    })
}, []);

      
      // const deleteItem = (item) => {
      //   const data = categoriesData.filter(i => i.index !== item.index)
      //   setcategoriesData({data})
      // }
      // const handleRemoveItem = (e) => {
      //   const name = e.target.getAttribute("categoryName")
      //   setcategoriesData(categoriesData.filter(item => item.name !== name));
      //  };
    return (
        console.log(productsData)
,
        <>
        {productsData.map ((product, index) => ( 
            console.log(product.images),
        <tr key={index}>
                    <td>{product.productName}</td>
                    <td>{product.categoryName}</td>
                    <td>{product.descriptions}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td> 
                        {/* {product.images.map (img =>(
                        image.url
                    ))} */}
                    </td>

                    <td>
                        <button type="button" className="btn btn-danger buttonMargin">Delete</button>
                        <button type="button" className="btn btn-warning buttonMargin">Edit</button>
                    </td>
                </tr>

        ))}
        </>
        )
}


export default Product;