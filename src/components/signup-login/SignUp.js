import React from 'react'
import { Form, withFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import { SignUpButton, SignUpWrapper, StyledForm } from './SignUpLoginStyles'

const SignUp = () => {
  
  return (
    <div>
      <StyledForm> 
        <SignUpWrapper>
          <TextField
            id="outlined-name"
            label="Full Name"
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
          
        </SignUpWrapper>
        <SignUpButton variant="contained" color="primary">
            Sign Up
          </SignUpButton>
          <p>Already registered? Login</p>
       
      </StyledForm>
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

