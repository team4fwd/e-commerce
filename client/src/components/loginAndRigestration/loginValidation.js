import React from "react"

const validate = values => {
    const errors = {}
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    //else if (!EmailValidator.validate(values.email)) {
    //     errors.email = "Invalid email address.";
    //   }

    const passwordRegex = /(?=.*[0-9])/;
    if (!values.password) {
        errors.password = "Required";
    } 
    return errors
}

export default validate;


