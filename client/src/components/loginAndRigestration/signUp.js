import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import validate from './signupValidation'
import RenderField from "./renderfield";

import { Field, reduxForm } from 'redux-form';

let SignUp = props => {
    const [fristName, setFristName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    
    const { handleSubmit, pristine, submitting } = props;
    return (
        <div className="App">
            <section className="vh-100 bg-image">
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card h-200" >
                                    <div className="card-body pt-3 pb-3 p-5">
                                        <h4 className="text-center mb-2">Create an account</h4>

                                        <form onSubmit={handleSubmit}>

                                            <div className="form-outline mb-2">
                                                <Field name="firstName" component={RenderField} label="First Name" value={fristName} onChange={(e)=>setFristName(e.target.value)}/>

                                            </div>

                                            <div className="form-outline mb-2">
                                                <Field name="lastName" component={RenderField} label="Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>

                                            </div>

                                            <div className="form-outline mb-2">
                                                <Field name="email" component={RenderField} label="Your Email"value={email} onChange={(e)=>setEmail(e.target.value)}/>

                                            </div>

                                            <div className="form-outline mb-2">
                                                <Field name="password" type="Password" component={RenderField} label="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                            </div>
                                            
                                            <div className="form-outline mb-3">
                                                <Field name="confirmpwd" type="Password" component={RenderField} label="Confirm Password" />
                                            </div>


                                            <div className="d-flex justify-content-center">
                                                <button type="submit" disabled={pristine || submitting} className="btn-primary signBtn btn btn-success btn-block btn-lg gradient-custom-4 text-body">Create</button>
                                            </div>

                                            <p className="text-center text-muted mt-2 mb-0">Have already an account? <Link className="fw-bold text-body" to={"/login"}><u>Login here</u></Link>
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

SignUp = reduxForm({
    form: 'SignUp',
    validate,
})(SignUp);

export default SignUp;