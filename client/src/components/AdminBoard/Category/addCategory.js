import React, { useState } from "react";
import RenderField from "../../RenderField";
import { Field, reduxForm } from 'redux-form';



let AddCategory = props => {

    const { handleSubmit, pristine, submitting, categoryError } = props;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="col-md-6">
                {(categoryError) ? <div className="alert alert-danger" role="alert">{categoryError}</div>:""}

                    <div className="form-outline mb-2">
                        <Field name="categoryName" id="category" component={RenderField} label="Add category name"  />

                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" disabled={pristine || submitting} className="btn btn-success btn-block btn-lg text-body">Add category</button>
                    </div>
                </div>
            </form>


        </div>)
}

AddCategory = reduxForm({
    form: 'AddCategory'
})(AddCategory);
export default AddCategory;