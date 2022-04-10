import React from "react"


 const RenderFieldForAdmin = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className="form-group row">
        <label className="control-label form-label col-sm-4" htmlFor="form3Example1cg">{label}</label>
        <div  className="col-sm-8">
            <input {...input} placeholder={label} type={type} className="form-control form-control-lg" />
            {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)


export default RenderFieldForAdmin;