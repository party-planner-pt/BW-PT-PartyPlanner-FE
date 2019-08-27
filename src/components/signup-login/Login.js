import React from 'react'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import { SignUpButton, SignUpWrapper, StyledForm } from './SignUpLoginStyles'

const Login = () => {
  
  return (
    <div>
      <StyledForm> 
        <SignUpWrapper>
          <TextField
            id="outlined-username"
            label="Username"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
          /> 
        </SignUpWrapper>
        <SignUpButton variant="contained" color="primary">
            Login
        </SignUpButton>
          <p>Not yet registered? Sign up</p>    
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

const FormikLogin = formikHOC(Login)

export default FormikLogin

