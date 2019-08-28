import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { SignUpButton, SignUpWrapper, StyledForm } from "..";

const StartMeal = () => {
  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{
          event_name: "",
          date: "",
          time: "",
          address: "",
          city: "",
          state: ""
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log("Summuting", values);
            setSubmitting(false);
          }, 500);
        }}
        validationSchema={Yup.object().shape({
          event_name: Yup.string("Provide a Event Name").required(
            "Event Name is Required"
          ),
          date: Yup.string()
            .required("No password provided.")
            .min(3, "date is too short - should be 3 chars minimum.")
            .matches(/(?=.*[0-15])/, "Password must contain a number."),

          time: Yup.string()
            .required("Please enter time.")
            .min(3, "time is too short - should be 3 chars minimum."),

          address: Yup.string()
            .required("No  address provided.")
            .required("address is needed to"),

          city: Yup.string()
            .required("Please provide city")
            .required("City Name is Required"),

          state: Yup.string()
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
                <label htmlFor="event_name">Event Name</label>
                <TextField
                  name="event_name"
                  label="Event Name"
                  type="text"
                  placeholder="Enter your Event Name"
                  value={values.event_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.event_name && touched.event_name && "error"}
                  margin="normal"
                  variant="outlined"
                />
                {errors.username && touched.username && (
                  <div className="feedback">{errors.username}</div>
                )}
                <label htmlFor="date">date</label>
                <TextField
                  name="date"
                  type="date"
                  placeholder="Enter your password"
                  value={values.date}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.date && touched.date && "error"}
                  margin="normal"
                  variant="outlined"
                />
                {errors.date && touched.date && (
                  <div className="feedback">{errors.date}</div>
                )}
                <label htmlFor="time">time</label>
                <TextField
                  name="time"
                  type="time"
                  placeholder="Enter your password"
                  value={values.time}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.time && touched.time && "error"}
                  margin="normal"
                  variant="outlined"
                />
                {errors.time && touched.time && (
                  <div className="feedback">{errors.time}</div>
                )}
                <label htmlFor="address">address</label>
                <TextField
                  name="address"
                  type="text"
                  placeholder="Enter your password"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.address && touched.address && "error"}
                  margin="normal"
                  variant="outlined"
                />
                {errors.address && touched.address && (
                  <div className="feedback">{errors.address}</div>
                )}
                <label htmlFor="city">city</label>
                <TextField
                  name="city"
                  type="text"
                  placeholder="Enter your password"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.city && touched.city && "error"}
                  margin="normal"
                  variant="outlined"
                />
                {errors.city && touched.city && (
                  <div className="feedback">{errors.city}</div>
                )}
                <label htmlFor="state">state</label>
                <TextField
                  name="state"
                  type="text"
                  placeholder="Enter your password"
                  value={values.state}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.state && touched.state && "error"}
                  margin="normal"
                  variant="outlined"
                />
                {errors.state && touched.state && (
                  <div className="feedback">{errors.state}</div>
                )}
              </SignUpWrapper>
              <SignUpButton
                variant="contained"
                color="primary"
                type="submit"
                disabled={isSubmitting}
              >
                Next Step
              </SignUpButton>
            </StyledForm>
          );
        }}
      </Formik>
    </div>
  );
};

export default StartMeal;
