import React, { useState, useEffect } from 'react';
import { GetCategoryAPI } from '../../../util/API';
import { MdDeleteOutline } from 'react-icons/md';
import { deleteCategory } from '../../../util/API';
import { gridColumnsTotalWidthSelector } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

let Category = () => {
  // const categories = GetCategoryAPI().then((data) => data)
  const [categoriesData, setcategoriesData] = useState([]);

  useEffect(() => {
    GetCategoryAPI().then((data) => {
      setcategoriesData(data);
    });
  }, []);

  function DeleteOperation(id) {
    fetch('https://e-commerce-fwd.herokuapp.com/cateogry/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },

      body: null,
    }).then((res) => res.json());

    GetCategoryAPI().then((data) => {
      setcategoriesData(data);
    });
  }

  return (
    <>
      {categoriesData.map((category, index) => (
        <tr key={index}>
          <td>{category.categoryName}</td>
          <td>
            <div className='prodAndCteg-List__bottons'>
              <Link to={'updateCategory/' + category._id}>
                <button className='prodAndCteg-List__edit'>Edit</button>
              </Link>
              <MdDeleteOutline
                className='prodAndCteg-List__delete'
                onClick={() => DeleteOperation(category._id)}
              />
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default Category;
