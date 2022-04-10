import React, { useState } from "react";
import RenderFieldForAdmin from "./renderFieldAdmin";
import { Field, reduxForm } from 'redux-form';
import validate from './validationProduct';
import CategoryOption from "./categoryOption";
import renderSelectField from "./renderSelectField";

let AddProduct = props => {

    const { handleSubmit, pristine, submitting, productError } = props;
    return (
        <div>
            <form onSubmit={handleSubmit} className="modal-form flex-center">
                <div className="col-md-6">
                    {(productError) ? <div className="alert alert-danger" role="alert">{productError}</div> : ""}

                    <div className="form-outline mb-4">
                        <Field name="productName" id="product" type="text" component={RenderFieldForAdmin} label="product name" />
                    </div>

                    <div className="form-outline mb-4">
                        <Field name="categoryName" id="categoryName" type="text" component={renderSelectField} label="category name" >
                            <CategoryOption /></Field>
                    </div>
                    <div className="form-outline mb-4">
                        <Field name="descriptions" id="descriptions" type="text" component={RenderFieldForAdmin} label="descriptions" />

                    </div>
                    <div className="form-outline mb-4">
                        <Field name="price" id="price " type="number" component={RenderFieldForAdmin} label="price" />

                    </div>
                    <div className="form-outline mb-4">
                        <Field name="quantity" type="text" id="quantity" component={RenderFieldForAdmin} label="quantity" />

                    </div>

                    <div className="form-outline mb-4">
                        <div className="form-group row">
                            <label className="control-label form-label col-sm-4" htmlFor="form3Example1cg">Upload images</label>
                            <div className="col-sm-8">
                                <input name="images" type="file" id="myfile" multiple required />

                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" disabled={pristine || submitting} className="btn btn-success btn-block btn-lg text-body">Add product</button>
                    </div>
                </div>
            </form>


        </div>)
}

AddProduct = reduxForm({
    form: 'AddProduct',
    validate,
})(AddProduct);
export default AddProduct;