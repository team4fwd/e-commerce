
import "../prodAndCteg-List.scss"
import React, { useState } from "react";
import { useFormik } from 'formik';
import { AddCategoryAPI } from "../../../API";
import { useNavigate } from 'react-router-dom'




let AddCategory = props => {

    const [categoryError, setCategoryError] = useState("");
    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            categoryName: ""
        },
        onSubmit: values => {

            AddCategoryAPI(values)
                .then((data) => data)
                .then((data) => {
                    if (data.status === false) {
                        setCategoryError(data.message)
                    } else {
                        navigate("/admin/categories")
                    }


                })

        }

    });
    
    return (
        <div className='prodAndCteg-List'>
            <div className='prodAndCteg-List__titleContainer'>
                <h3 className='prodAndCteg-List__title'>Add a new category</h3>

            </div>
            <form onSubmit={formik.handleSubmit} >
                <div className="col-md-6 form-center">
                    {(categoryError) ? <div className="alert alert-danger" role="alert">{categoryError}</div> : ""}

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
                        <button type="submit" className="btn btn-primary btn-block  text-body">Add category</button>
                    </div>
                </div>
            </form>


        </div>)
}


export default AddCategory;