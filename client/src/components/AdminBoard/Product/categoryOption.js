import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { GetCategoryAPI } from '../../../util/API';

let CategoryOption = () => {
  // const categories = GetCategoryAPI().then((data) => data)
  const [categoriesData, setcategoriesData] = useState([]);
  const { token } = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    GetCategoryAPI(token).then((data) => {
      setcategoriesData(data);
    });
  }, [token]);

  return (
    <>
      <option value='' label='select a category'>
        select category
      </option>
      {categoriesData.map((category, index) => (
        <option key={index} value={category.categoryName}>
          {category.categoryName}
        </option>
      ))}
    </>
  );
};

export default CategoryOption;
