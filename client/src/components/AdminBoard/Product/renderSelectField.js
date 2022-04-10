const renderSelectField = ({ input, label, type, meta: { touched, error }, children }) => (
    <div className="form-group row">
      <label  className="control-label form-label col-sm-4" htmlFor="form3Example1cg">{label}</label>
      <div  className="col-sm-8">
        <select {...input} placeholder={label} type={type} className="form-select" >
          {children}
        </select>
        {touched && (error && <span className="text-danger">{error}</span>)}
      </div>
    </div>
  )

  export default renderSelectField
