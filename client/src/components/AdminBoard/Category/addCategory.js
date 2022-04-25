import '../prodAndCteg-List.scss';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { AddCategoryAPI } from '../../../util/API';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loadingpage from '../../../util/loading/Loading'

let AddCategory = (props) => {
  const [loading, setLoading] = useState(false);
  const [categoryError, setCategoryError] = useState('');
  const [success, setsuccess] = useState('');
  const { token } = useSelector((state) => state.user.userInfo);
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      categoryName: '',
    },
    onSubmit: (values) => {
      AddCategoryAPI(values, token)
        .then((data) => data)
        .then((data) => {
          if (data.status === false) {
            setLoading(false);

            setCategoryError(data.message);

          } else {
            setLoading(false);
            setsuccess(data.message);
            setTimeout(() => {
            navigate('/admin/categories');
          },2000)
          }
        });
    },
  });

  return (
    <div className='prodAndCteg-List'>
      <div className='prodAndCteg-List__titleContainer'>
        <h3 className='prodAndCteg-List__title'>Add a new category</h3>
      </div>
      {loading ? (
        <Loadingpage />

      ) : (
        <form onSubmit={formik.handleSubmit}>

          <div className='col-md-6 form-center'>
            {categoryError ? (
              <div className='alert alert-danger' role='alert'>
                {categoryError}
              </div>
            ) : (
              ''
            )}
            {success ? (
              <div className='alert alert-success' role='alert'>
                {success}
              </div>
            ) : (
              ''
            )}

            <div className='form-outline mb-3'>
              <label className='control-label form-label' htmlFor='categoryName'>
                Category Name
              </label>
              <input
                className='form-control form-control-lg'
                id='categoryName'
                name='categoryName'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.categoryName}
              />
              {formik.errors.categoryName ? (
                <div className='text-danger'>{formik.errors.categoryName}</div>
              ) : null}
            </div>

            <div className='d-flex justify-content-center'>
              <button
                type='submit'
                className='btn btn-primary btn-block  text-body'
              >
                Add category
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddCategory;
