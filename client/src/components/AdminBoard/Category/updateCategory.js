import React, { useState, useEffect } from "react";
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Loadingpage from '../../../util/loading/Loading'





import "../prodAndCteg-List.scss"

let Updatecategory = props => {
  const { token } = useSelector((state) => state.user.userInfo);
  const [categoryData, setcategoryData] = useState([]);
  let navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [categoryError, setCategoryError] = useState('');
  const [success, setsuccess] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch("https://e-commerce-fwd.herokuapp.com/cateogry/" + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token,

      },

      body: JSON.stringify()
    }).then(res => res.json()).then((data) => {setcategoryData(data)
    setLoading(false);}

    )
  }, [id, token]);



  const formik = useFormik({
    initialValues: {
      categoryName: categoryData.categoryName,
    },
    enableReinitialize: true,

    onSubmit: (values) => {
      setLoading(true);
      fetch("https://e-commerce-fwd.herokuapp.com/cateogry/" + id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token,

        },

        body: JSON.stringify(values)
      }).then(res => res.json()).then((data) => data)
        .then((data) => {
          if (data.status === true) {
            setLoading(false);
            setsuccess(data.message);
            setTimeout(() => {
            navigate('/admin/categories');
          },2000)
          } else {
            setLoading(false);
            setCategoryError(data.message);
           
          }
        })

    }
  })

  return (
    <div className='prodAndCteg-List'>
      <div className='prodAndCteg-List__titleContainer'>
        <h3 className='prodAndCteg-List__title'>Update Category</h3>

      </div>
      {loading ? (
        <Loadingpage />

      ) : (
        <form onSubmit={formik.handleSubmit} >
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
          <div className="col-md-6 form-center">
            <div className="form-outline mb-3">
              <label className="control-label form-label" htmlFor="categoryName">Category Name</label>
              <input
                className="form-control form-control-lg"
                id="categoryName"
                name="categoryName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.categoryName}
              />
              {formik.errors.categoryName ? <div className="text-danger">{formik.errors.categoryName}</div> : null}

            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary btn-block  text-body">update category</button>
            </div>
          </div>
        </form>

      )}

    </div>)
}


export default Updatecategory;