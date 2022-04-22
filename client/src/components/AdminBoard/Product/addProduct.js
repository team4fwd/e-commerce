import React, { useState } from 'react';
import { useFormik } from 'formik';
import validate from './validationProduct';
import { AddProductAPI } from '../../../util/API';
import CategoryOption from './categoryOption';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../prodAndCteg-List.scss';
import { useSelector } from 'react-redux';

let AddProduct = (props) => {
  const [productError, setProductError] = useState('');
  const [images, setImages] = useState([]);
  const { token } = useSelector((state) => state.user.userInfo);

  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      productName: '',
      categoryName: '',
      descriptions: '',
      price: '',
      quantity: '',
      //
      images: [],
    },
    validate,
    onSubmit: (values) => {
      if (!images) return alert('No Image Upload');

      //values["images"] = images;
      values.images = images;
      AddProductAPI(values, token)
        .then((data) => data)
        .then((data) => {
          if (data.status === false) {
            setProductError(data.message);
          } else {
            navigate('/admin/products');
          }
        });
    },
  });

  const handleUpload = async (e) => {
    e.preventDefault();

    const files = e.target.files;

    for (var i = 0; i < files.length; i++) {
      let file = files[i];

      try {
        if (!file) return alert('File not exist.');

        if (file.size > 1024 * 1024)
          // 1mb
          return alert('Size too large!');

        console.log(file.type);
        if (
          file.type !== 'image/jpeg' &&
          file.type !== 'image/png' &&
          file.type !== 'image/webp'
        ) {
          // 1mb
          return alert('File format is incorrect.');
        }

        let formData = new FormData();
        formData.append('file', file);

        const res = await axios.post(
          'https://e-commerce-fwd.herokuapp.com/uploadImage',
          formData,
          {
            headers: {
              'content-type': 'multipart/form-data',
              'x-access-token': token,
            },
          }
        );
        console.log(res.data);

        await formik.values.images.push(res.data);
        // images.push(res.data)
      } catch (err) {
        alert(err.response.data.message);
      }
    }
    setImages(formik.values.images);
  };

  const handleDestroy = async (public_id) => {
    await setImages(
      images.filter(function (obj) {
        return obj.public_id !== public_id;
      })
    );
    formik.values.images = formik.values.images.filter(function (obj) {
      return obj.public_id !== public_id;
    });
  };

  return (
    <div className='prodAndCteg-List row'>
      <div className='prodAndCteg-List__titleContainer'>
        <h3 className='prodAndCteg-List__title'>Add product</h3>
      </div>

      {productError ? (
        <div className='alert alert-danger' role='alert'>
          {productError}
        </div>
      ) : (
        ''
      )}

      <div className='col-md-12 div-form'>
        <form className='form-center' onSubmit={formik.handleSubmit}>
          <label className='control-label form-label' htmlFor='productName'>
            Product Name
          </label>
          <input
            className='form-control form-control-lg'
            id='productName'
            name='productName'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.productName}
          />
          {formik.errors.productName ? (
            <div className='text-danger'>{formik.errors.productName}</div>
          ) : null}

          <label className='control-label form-label' htmlFor='categoryName'>
            Category Name
          </label>
          <select
            className='form-control form-control-lg'
            id='categoryName'
            name='categoryName'
            onChange={formik.handleChange}
            value={formik.values.categoryName}
          >
            {' '}
            <CategoryOption />
          </select>
          {formik.errors.categoryName ? (
            <div className='text-danger'>{formik.errors.categoryName}</div>
          ) : null}

          <label className='control-label form-label' htmlFor='descriptions'>
            Descriptions
          </label>
          <textarea
            className='form-control form-control-lg'
            id='descriptions'
            name='descriptions'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.descriptions}
          />
          {formik.errors.descriptions ? (
            <div className='text-danger'>{formik.errors.descriptions}</div>
          ) : null}

          <label className='control-label form-label' htmlFor='price'>
            Price
          </label>
          <input
            className='form-control form-control-lg'
            id='price'
            name='price'
            type='number'
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          {formik.errors.price ? (
            <div className='text-danger'>{formik.errors.price}</div>
          ) : null}
          <label className='control-label form-label' htmlFor='quantity'>
            Quantity
          </label>
          <input
            className='form-control form-control-lg'
            id='quantity'
            name='quantity'
            type='number'
            onChange={formik.handleChange}
            value={formik.values.quantity}
          />
          {formik.errors.quantity ? (
            <div className='text-danger'>{formik.errors.quantity}</div>
          ) : null}

          <input
            type='file'
            name='file'
            className='form-control-lg'
            id='file_up2'
            multiple
            onChange={handleUpload}
          />

          <div className='prod_images_Container'>
            {images.map((image, index) => (
              <div className='prod_images' key={index}>
                <img src={image.url} alt='' />
                <span onClick={() => handleDestroy(image.public_id)}>X</span>
              </div>
            ))}{' '}
          </div>

          <div className='d-flex justify-content-center mt-3'>
            <button
              type='submit'
              className='btn btn-primary btn-block  text-body'
            >
              Add product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
