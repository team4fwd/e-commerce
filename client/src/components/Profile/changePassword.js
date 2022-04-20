
import React, { useState, useEffect } from "react";
import { useFormik } from 'formik';
import validate from './profilevalidation';


const ChangePassword = () => {
    const [password, setPassword] = useState(false)

  const formik = useFormik({

    initialValues: {
        password: '',
       
    },
    validate,
    onSubmit: values => {
      values.avatar = avatar;

      console.log(values)

        AddAddressAPI(values)
            .then((data) => data)
            .then((data) => console.log(data))



    }

});

return(
<div className="col-md-12 div-form">

<form className="form-center" onSubmit={formik.handleSubmit}>
    <label className="control-label form-label" htmlFor="currentPassword">current password</label>
    <input
        className="form-control form-control-lg"
        id="currentPassword"
        name="currentPassword"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.currentPassword}
    />
    {formik.errors.currentPassword ? <div className="text-danger">{formik.errors.currentPassword}</div> : null}


    <label className="control-label form-label" htmlFor="newPassword">new password</label>
    <input
        className="form-control form-control-lg"
        id="newPassword"
        name="newPassword"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.newPassword}
    />
    {formik.errors.newPassword ? <div className="text-danger">{formik.errors.newPassword}</div> : null}

    <label className="control-label form-label" htmlFor="confirmPassword">confirm password</label>
    <input
        className="form-control form-control-lg"
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
    />
    {formik.errors.confirmPassword ? <div className="text-danger">{formik.errors.confirmPassword}</div> : null}
 

    

    <div className="d-flex justify-content-center mt-3">
        <button type="submit" className="btn btn-primary btn-block  text-body" >submit</button>
    </div>
</form>

</div>
)
}


export default ChangePassword;