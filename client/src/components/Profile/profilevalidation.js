
const validate = values => {
    const errors = {}
if (!values.newPassword) {
    errors.newPassword = 'Required'
  } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/i.test(values.newPassword)) {
    errors.newPassword = 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Required'
  } else if (values.confirmPassword !== values.newPassword) {
    errors.confirmPassword = 'Confirm password is not matched'
  }  return errors
}

export default validate;