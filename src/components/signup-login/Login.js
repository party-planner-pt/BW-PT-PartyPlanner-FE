import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const Login = ({ errors, touched, values, status }) => {
  const [signIn, setSignIn] = useState([]);
  console.log(signIn);

  useEffect(() => {
    if (status) {
      setSugnIn([...signIn, status]);
    }
  }, [status]);

  return (
    <div className="form-container">
      <Form>
        <Field
          component="input"
          type="text"
          name="First name"
          placeholder="First name"
        />
        <Field
          component="input"
          type="text"
          name="Last name"
          placeholder="Last name"
        />

        <Field
          component="input"
          type="text"
          name="Your email address"
          placeholder="Email"
        />

        <Field
          component="input"
          type="text"
          name="Re-enter email address"
          placeholder="Re-enter email"
        />

        <Field
          component="input"
          type="text"
          name=" Choose a password"
          placeholder="Password"
        />

        <label className="checkbox-container">
          I agree to the terms of Service and provacy policy.
          <Field type="checkbox" name="TermofService" />
          <span className="checkmark" />
        </label>
        <button>Create Your Account</button>
      </Form>
    </div>
  );
};

export default Login;
