import React from "react";
import { withFormik, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import TextField from "@material-ui/core/TextField";

const LoginForm = () => (
  <Formik
    initialValues={{ email: "", password: "", confirmPassword: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("Email is Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-15])/, "Password must contain a number."),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null])
        .required("confirmed password must match.")
        .matches(/(?=.*[0-15])/, "Password must contain a number.")
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && "error"}
          />
          {errors.email && touched.email && (
            <div className="feedback">{errors.email}</div>
          )}
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
          />
          {errors.email && touched.email && (
            <div className="feedback">{errors.password}</div>
          )}
          <label htmlFor="confirmPassword">Password</label>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Please confirm your password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.confirmPassword && touched.confirmPassword && "error"
            }
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <div className="feedback">{errors.confirmPassword}</div>
          )}
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </form>
      );
    }}
  </Formik>
);

export default LoginForm;
