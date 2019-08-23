import React from 'react'
import { Form, Field, withFormik } from 'formik'
// import * as Yup from 'yup'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'

const SignUp = () => {
  
  return (
    <div className="signup-form-wrapper">
      <Form> 
        <TextField
          id="outlined-name"
          label="Full Name"
          // className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-username"
          label="Username"
          // className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-email-input"
          label="Email"
          // className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          // className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
        />
      </Form>
    </div>

  )
}
const formikHOC = withFormik ({
  mapPropsToValues({fullname, username, email, password}) {
    return {
      fullname: fullname || "",
      username: username || "",
      email: email || "",
      password: password || ""
    }
  },
})

const FormikSignUp = formikHOC(SignUp)

export default FormikSignUp

