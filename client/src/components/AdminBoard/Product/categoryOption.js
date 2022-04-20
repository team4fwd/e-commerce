import React, { useState, useEffect } from 'react';
import { GetCategoryAPI } from '../../../util/API';

let CategoryOption = () => {
  // const categories = GetCategoryAPI().then((data) => data)
  const [categoriesData, setcategoriesData] = useState([]);

  useEffect(() => {
    GetCategoryAPI().then((data) => {
      setcategoriesData(data);
    });
  }, []);

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
