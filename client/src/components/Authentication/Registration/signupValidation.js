import React from "react"

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  } else if (values.firstName.length < 2) {
    errors.firstName = 'Minimum be 2 characters or more'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  } else if (values.lastName.length < 2) {
    errors.lastName = 'Minimum be 2 characters or more'
  }

  if (!values.password) {
    errors.password = 'Required'
  } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/i.test(values.password)) {
    errors.password = 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
  }
  if (!values.confirmpwd) {
    errors.confirmpwd = 'Required'
  } else if (values.confirmpwd !== values.password) {
    errors.confirmpwd = 'Confirm password is not matched'
  }
  return errors
}

export default validate;


