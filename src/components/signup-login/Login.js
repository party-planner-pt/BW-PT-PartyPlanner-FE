import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { SignUpButton, SignUpWrapper, StyledForm } from "./SignUpLoginStyles";
import LoggedInRouter from "./../LoggedInRouter";

const Login = props => {
  const [thetokens, setToken] = useState({ username: "", password: "" });

  // const [userId, setUserId] = useState({});

  const handleChange = event => {
    setToken({ ...thetokens, [event.target.name]: event.target.value });
  };



  const handleSubmit = event => {
    event.preventDefault();
  };
  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          axios
            .post(
              "https://potluck-planner-bw.herokuapp.com/users/login",
              values
            )
            .then(res => {
              console.log("res", res);
              // localStorage.setItem("token", res.data.token);
              // let id = res.data.user_id
              // setUserId(res.data.user_id)
              props.history.push(`/createpotluckform`)  
            })
            .catch(err => console.log(err.response));
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string("Provide a Username").required(
            "Username is Required"
          ),
          password: Yup.string()
            .required("No password provided.")
            .min(8, "Password is too short - should be 8 chars minimum.")
            .matches(/(?=.*[0-15])/, "Password must contain a number.")
        })}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            handleSubmit,
            isSubmitting,
            handleChange,
            handleBlur
          } = props;

          return (
            <StyledForm onSubmit={handleSubmit}>
              <SignUpWrapper>
                {/* <label htmlFor="username">username</label> */}
                <TextField
                  name="username"
                  label="username"
                  type="text"
                  placeholder="Enter your username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.username && touched.username && "error"}
                  margin="normal"
                  variant="outlined"
                />

                {errors.username && touched.username && (
                  <div className="feedback">{errors.username}</div>
                )}
                {/* <label htmlFor="password">Password</label> */}
                <TextField
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.password && touched.password && "error"}
                  margin="normal"
                  variant="outlined"
                />
                {errors.password && touched.password && (
                  <div className="feedback">{errors.password}</div>
                )}
              </SignUpWrapper>
              <SignUpButton
                variant="contained"
                color="primary"
                type="submit"
                disabled={isSubmitting}
              >
                Login
              </SignUpButton>
            </StyledForm>
          );
        }}
      </Formik>
    </div>
  );
};
export default Login;
