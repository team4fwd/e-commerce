import React from "react"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const RenderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label className="control-label form-label" htmlFor="form3Example1cg">{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} className="form-control form-control-lg" />
            {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)


export default RenderField;