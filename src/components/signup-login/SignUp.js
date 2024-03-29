import React from "react";
import { Field, withFormik, Form } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import { TextField } from "formik-material-ui";
import { SignUpButton, SignUpWrapper, StyledForm } from "./SignUpLoginStyles";
import Button from "@material-ui/core/Button";


const SignUp = props => {

  const {
    touched,
    handleSubmit,
  } = props;
  
  return (
    <div>
      <StyledForm>
        <SignUpWrapper>
          <Field
            type="text"
            name="full_name"
            component={TextField}
            id="outlined-name"
            label="Full Name"
            margin="normal"
            variant="outlined"
          />
          {touched.name}
      
          
          <Field
            type="text"
            name="username"
            component={TextField}
            id="outlined-username"
            label="Username"
            margin="normal"
            variant="outlined"
          />
          {touched.username}

          <Field
            type="email"
            name="email"
            component={TextField}
            id="outlined-email-input"
            label="Email"
            margin="normal"
            variant="outlined"
          />
          {touched.email}
  

          <Field
            type="password"
            name="password"
            component={TextField}
            id="outlined-password-input"
            label="Password"
            margin="normal"
            variant="outlined"
          />
          {touched.password}
          
        </SignUpWrapper>
        <button variant="contained" color="primary" component="button">
          Sign Up
        </button>
        <p>Already registered?</p>
            <Link to="/users/login">
               Login
            </Link>
      </StyledForm>
    </div>
  )
}
const FormikSignUp = withFormik ({
  mapPropsToValues({full_name, username, email, password}) {
    return {
      full_name: full_name || "",
      username: username || "",
      email: email || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    full_name: Yup.string().required(),
    username: Yup.string().required(), // must not contain spaces
    email: Yup.string().email().required(),
    password: Yup.string().required(), 
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    console.log(values)
    resetForm();
    axios
      .post("https://potluck-planner-bw.herokuapp.com/users/register", values)
      .then(res => {
        console.log(res.data)
        setStatus(res.data)
        alert('Registration Successful!')
      })
      .catch(err => console.error(err));
  }
})(SignUp);

export default FormikSignUp;
