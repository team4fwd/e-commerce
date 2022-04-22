import React, { useState, useEffect } from "react";
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';





import "../prodAndCteg-List.scss"

let Updatecategory = props => {
  const { token } = useSelector((state) => state.user.userInfo);
  const [categoryData, setcategoryData] = useState([]);
  let navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch("https://e-commerce-fwd.herokuapp.com/cateogry/" + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token,

      },

      body: JSON.stringify()
    }).then(res => res.json()).then((data) => setcategoryData(data))
  }, [id, token]);



  const formik = useFormik({
    initialValues: {
      categoryName: categoryData.categoryName,
    },
    enableReinitialize: true,

    onSubmit: (values) => {
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
            navigate('/admin/categories');
          } else {
            alert(data.message)
          }
        })

    }
  })

  return (
    <div className='prodAndCteg-List'>
      <div className='prodAndCteg-List__titleContainer'>
        <h3 className='prodAndCteg-List__title'>Update Category</h3>

      </div>
      <form onSubmit={formik.handleSubmit} >

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




    </div>)
}


export default Updatecategory;