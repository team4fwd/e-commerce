import React, { useState, useEffect } from 'react';
import { DeleteAPI, GetCategoryAPI } from '../../../util/API';
import { MdDeleteOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loadingpage from '../../../util/loading/Loading'

let Category = () => {
  const [loading, setLoading] = useState(false);
  const [categoriesData, setcategoriesData] = useState([]);
  const { token } = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    setLoading(true);
    GetCategoryAPI().then((data) => {
      setcategoriesData(data);
      setLoading(false);

    });
  }, []);

  function DeleteOperation(id) {
    DeleteAPI(id, 'cateogry', token);

    GetCategoryAPI().then((data) => {
      setcategoriesData(data);
    });
  }

  return (
    <> {loading ? (
      <Loadingpage />

    ) : (
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
    </>)}</>
  );
};

export default Category;
