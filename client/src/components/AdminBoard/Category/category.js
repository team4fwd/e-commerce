import React, { useState, useEffect }  from "react";
import { GetCategoryAPI } from '../../../API';



let Category = () => {


// const categories = GetCategoryAPI().then((data) => data)
const [categoriesData, setcategoriesData] = useState([]);

useEffect(() => {
    GetCategoryAPI().then((data) => {
       setcategoriesData(data)
        
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
        
        <>
        {categoriesData.map ((category, index) => ( 
        <tr key={index}>
                    <td>{category.categoryName}</td>
                    <td>
                        <button type="button" className="btn btn-danger buttonMargin">Delete</button>
                        <button type="button" className="btn btn-warning buttonMargin">Edit</button>
                    </td>
                </tr>

        ))}
        </>
        )
}


export default Category;