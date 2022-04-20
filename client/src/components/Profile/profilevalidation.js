
const validate = values => {
    const errors = {}
if (!values.password) {
    errors.password = 'Required'
  } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/i.test(values.password)) {
    errors.password = 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
  }
  if (!values.confirmpwd) {
    errors.confirmpwd = 'Required'
  } else if (values.confirmpwd !== values.password) {
    errors.confirmpwd = 'Confirm password is not matched'
  }  return errors
}

export default validate;