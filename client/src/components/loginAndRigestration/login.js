import React from "react";
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import validate from './loginValidation'
import RenderField from "./renderfield";
import { Field, reduxForm } from 'redux-form';

let LogIn = props => {
    const { handleSubmit, pristine, submitting } = props;
    return (
        <div className="App">
            <section className="vh-100 bg-image">
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card h-200" >
                                    <div className="card-body  pt-3 pb-3 p-5">
                                        <h4 className="text-center mb-2">Login</h4>

                                        <form onSubmit={handleSubmit}>

                                            <div className="form-outline mb-2">
                                                <Field name="email" component={RenderField} label="Your Email" />

                                            </div>

                                            <div className="form-outline mb-3">
                                                <Field name="password"  type="Password" component={RenderField} label="Password" />

                                            </div>


                                            <div className="d-flex justify-content-center">
                                                <button type="submit" disabled={pristine || submitting} className="btn-primary signBtn btn btn-success btn-block btn-lg gradient-custom-4 text-body">Sign In</button>
                                            </div>

                                            <p className="text-center text-muted mt-2 mb-0">Create an account <Link className="fw-bold text-body" to={"/signUp"}><u>here</u></Link>
                                            </p>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>)
}

LogIn = reduxForm({
    form: 'LogIn',
    validate,
})(LogIn);
export default LogIn;