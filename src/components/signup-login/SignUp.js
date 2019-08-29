import React from "react";
import { Field, withFormik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { TextField } from "formik-material-ui";
import { SignUpButton, SignUpWrapper, StyledForm } from "./SignUpLoginStyles";
import Button from "@material-ui/core/Button";

const SignUp = props => {
  const { touched, errors, handleSubmit } = props;

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <SignUpWrapper>
          <Field
            type="text"
            name="name"
            component={TextField}
            id="outlined-name"
            label="Full Name"
            margin="normal"
            variant="outlined"
          />
          {touched.name && errors.name && (
            <p className="error">{errors.name}</p>
          )}

          <Field
            type="text"
            name="username"
            component={TextField}
            id="outlined-username"
            label="Username"
            margin="normal"
            variant="outlined"
          />
          {touched.username && errors.username && (
            <p className="error">{errors.username}</p>
          )}

          <Field
            type="email"
            name="email"
            component={TextField}
            id="outlined-email-input"
            label="Email"
            margin="normal"
            variant="outlined"
          />
          {touched.email && errors.email && (
            <p className="error">{errors.email}</p>
          )}

          <Field
            type="password"
            name="password"
            component={TextField}
            id="outlined-password-input"
            label="Password"
            margin="normal"
            variant="outlined"
          />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
        </SignUpWrapper>
        <button variant="contained" color="primary" component="button">
          Sign Up
        </button>
        <p>Already registered? Login</p>
      </StyledForm>
    </div>
  );
};
const FormikSignUp = withFormik({
  mapPropsToValues({ name, username, email, password }) {
    return {
      name: name || "",
      username: username || "",
      email: email || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("required"),
    username: Yup.string().required("required"), // must not contain spaces
    email: Yup.string()
      .email()
      .required("required"),
    password: Yup.string().required("required")
  }),

  handleSubmit(values, { setStatus }) {
    axios
      .post("https://potluck-planner-bw.herokuapp.com/users/register", values)
      .then(res => {
        console.log(res.data);
        setStatus(res.data);
      })
      .catch(err => console.error(err));
  }
})(SignUp);

export default FormikSignUp;
