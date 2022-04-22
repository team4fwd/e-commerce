import React, { useState, useEffect } from 'react';
import { DeleteAPI, GetCategoryAPI } from '../../../util/API';
import { MdDeleteOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

let Category = () => {
  // const categories = GetCategoryAPI().then((data) => data)
  const [categoriesData, setcategoriesData] = useState([]);
  const { token } = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    GetCategoryAPI(token).then((data) => {
      setcategoriesData(data);
    });
  }, [token]);

  function DeleteOperation(id) {
    DeleteAPI(id, 'cateogry', token);

    GetCategoryAPI(token).then((data) => {
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
