import React, { useState, useEffect } from "react";
import { Formik, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import {
  SignUpButton,
  SignUpWrapper,
  StyledForm
} from "../signup-login/SignUpLoginStyles";

const CreatePotluckForm = () => {
  const [setMeal] = useState([]);
  useEffect(() => {
    axios
      .post(" ")
      .then(response => {
        console.log(response.data);
        setMeal(response.data);
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }, []);

  return (
    <div>
      <h1>Plan Event</h1>
      <Formik
        values={{
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
          event_name: Yup.string().required("Event Name is Required"),

          date: Yup.string()
            .required("Date was not provided.")
            .min(3, "date is too short - should be 3 chars minimum."),

          time: Yup.string()
            .required("Please enter time.")
            .min(3, "time is too short - should be 3 chars minimum."),

          address: Yup.string()
            .required("No  address provided.")
            .required("address is needed to"),

          city: Yup.string()
            .required("Please provide city")
            .required("City Name is Required"),

          state: Yup.string().required("State is not provided.")
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
                <label htmlFor="event_name" style={{ textAlign: "left" }}>
                  Event Name
                </label>
                <TextField
                  id="outlined-full-width"
                  style={{ margin: 25 }}
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
                {errors.event_name && touched.event_name && (
                  <div className="feedback">{errors.username}</div>
                )}
                <label htmlFor="date" style={{ textAlign: "left" }}>
                  Date
                </label>
                <TextField
                  style={{ margin: 25 }}
                  name="date"
                  type="date"
                  placeholder="Enter your date"
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
                <label htmlFor="time" style={{ textAlign: "left" }}>
                  Time
                </label>
                <TextField
                  style={{ margin: 25 }}
                  name="time"
                  type="time"
                  placeholder="Enter your time"
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
                <label htmlFor="address" style={{ textAlign: "left" }}>
                  Address
                </label>
                <TextField
                  style={{ margin: 25 }}
                  name="address"
                  type="text"
                  placeholder="Enter address"
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
                <label htmlFor="city" style={{ textAlign: "left" }}>
                  City
                </label>
                <TextField
                  style={{ margin: 25 }}
                  name="city"
                  type="text"
                  placeholder="Enter city"
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
                <label htmlFor="state" style={{ textAlign: "left" }}>
                  State
                </label>
                <TextField
                  style={{ margin: 25 }}
                  name="state"
                  type="text"
                  placeholder="Enter state"
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

export default CreatePotluckForm;
