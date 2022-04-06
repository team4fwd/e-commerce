import React, { useState } from "react";
import { Link } from 'react-router-dom';
import validate from './loginValidation'
import RenderField from "../RenderField";
import { Field, reduxForm } from 'redux-form';



let LogIn = props => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    

    const { handleSubmit, pristine, submitting,LoginError } = props;
    return (
        <div>
            <section className="vh-100 bg-image">
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card h-200" >
                                    <div className="card-body  pt-3 pb-3 p-5">
                                        <h4 className="text-center mb-2">Login</h4>
                                       {(LoginError) ? <div className="alert alert-danger" role="alert">{LoginError}</div>:""}
                                        <form onSubmit={handleSubmit}>

                                            <div className="form-outline mb-2">
                                                <Field name="email" id="email" component={RenderField} label="Your Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

                                            </div>

                                            <div className="form-outline mb-3">
                                                <Field name="password" id="password"  type="Password" component={RenderField} label="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                                            </div>


                                            <div className="d-flex justify-content-center">
                                                <button type="submit" disabled={pristine || submitting} className="btn-primary signBtn btn btn-success btn-block btn-lg gradient-custom-4 text-body">Sign In</button>
                                            </div>

                                            <p className="text-center text-muted mt-2 mb-0">Create an account <Link className="fw-bold text-body btnLink" to={"/signUp"}><span>here</span></Link>
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