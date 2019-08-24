import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

const Login = ({ errors, touched, status }) => {
  const [signup, setSignIn] = useState([]);
  console.log(signup);

  useEffect(() => {
    if (status) {
      setSignIn([...signup, status]);
    }
  }, [status]);

  return (
    // <div className="form-container">
    <Form>
      {touched.First_name && errors.First_name && (
        <p className="error">{errors.First_names}</p>
      )}
      <Field
        component="input"
        type="text"
        name="First_name"
        placeholder="First name"
      />
      {touched.Last_name && errors.Last_name && (
        <p className="error">{errors.Last_name}</p>
      )}
      <Field
        component="input"
        type="text"
        name="Last_name"
        placeholder="Last name"
      />
      {touched.Your_email_address && errors.Your_email_address && (
        <p className="error">{errors.Your_email_address}</p>
      )}
      <Field
        component="input"
        type="text"
        name="Your_email_address"
        placeholder="Email"
      />
      {touched.Choose_a_password && errors.Choose_a_passwords && (
        <p className="error">{errors.Choose_a_password}</p>
      )}
      <Field
        component="input"
        type="text"
        name=" Choose a password"
        placeholder="Password"
      />
      {touched.TermofService && errors.TermofService && (
        <p className="error">{errors.TermofService}</p>
      )}
      <label className="checkbox-container">
        <Field type="checkbox" name="TermofService" />
        I agree to the terms of Service and provacy policy.
        <span className="checkmark" />
      </label>
      <button>Login</button>
    </Form>

    // </div>
  );
};

const FormikLogin = withFormik({
  mapPropsToValues: ({ name, email, password, TermofService }) => {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      TermofService: TermofService || false
    };
  },
  validationSchema: yup.object().shape({
    name: yup.string().required("Please enter your name."),
    email: yup
      .string()
      .email("Please create an email")
      .required("You really need it"),
    password: yup
      .string()
      .min(4, "Password must be atleast 4 characters long")
      .required("Password is required"),
    TermofService: yup
      .boolean()
      .oneOf([true], "Please agree to the terms")
      .required()
  }),

  handleSubmit(values, { setStatus, resetForm, setErrors }) {
    if (values.email === "waffles@syrup.com") {
      setErrors({ email: "Email is already taken" });
    } else {
      axios
        .post("https://potluck-planner-bw.herokuapp.com/users/login", values)
        .then(res => {
          console.log("handleSubmit: then: res: ", res);
          setStatus(res.data);
          resetForm();
        })
        .catch(err => console.error("handleSubmit: catch: err: ", err));
    }
  }
})(Login);

export default FormikLogin;
