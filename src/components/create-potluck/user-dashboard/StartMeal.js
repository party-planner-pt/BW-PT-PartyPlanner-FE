import React, { useState, useEffect } from "react";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import TextField from "@material-ui/core/TextField";
// import { SignUpButton, SignUpWrapper, StyledForm } from "..";

const StartMeal = () => {
  //   return (
  //     <div>
  //       <h1>Login</h1>
  //       <Formik
  //         initialValues={{
  //           event_name: "",
  //           date: "",
  //           time: "",
  //           address: "",
  //           city: "",
  //           state: ""
  //         }}
  //         onSubmit={(values, { setSubmitting }) => {
  //           setTimeout(() => {
  //             console.log("Summuting", values);
  //             setSubmitting(false);
  //           }, 500);
  //         }}
  //         validationSchema={Yup.object().shape({
  //           event_name: Yup.string("Provide a Event Name").required(
  //             "Event Name is Required"
  //           ),
  //             date: Yup.string()
  //             .required("No password provided.")
  //             .min(8, "Password is too short - should be 8 chars minimum.")
  //             .matches(/(?=.*[0-15])/, "Password must contain a number."),
  // time: Yup.string()
  //             .required("No password provided.")
  //             .min(8, "Password is too short - should be 8 chars minimum.")
  //             .matches(/(?=.*[0-15])/, "Password must contain a number."),
  // address: Yup.string()
  //             .required("No  address provided.").required("address is needed to")
  //
  //
  // city: Yup.string()
  //             .required("Please provide city"),
  //
  //
  //              state: Yup.string()
  //             .required("No password provided.")
  //             .min(8, "Password is too short - should be 8 chars minimum.")
  //             .matches(/(?=.*[0-15])/, "Password must contain a number.")
  //         })}
  //       >
  //         {props => {
  //           const {
  //             values,
  //             touched,
  //             errors,
  //             handleSubmit,
  //             isSubmitting,
  //             handleChange,
  //             handleBlur
  //           } = props;
  //           return (
  //             <StyledForm onSubmit={handleSubmit}>
  //               <SignUpWrapper>
  //                 <label htmlFor="event_name">Event Name</label>
  //                 <TextField
  //                   name="event_name"
  //                   label="event_name"
  //                   type="text"
  //                   placeholder="Enter your Event Name"
  //                   value={values.event_name}
  //                   onChange={handleChange}
  //                   onBlur={handleBlur}
  //                   className={errors.event_name && touched.event_name && "error"}
  //                   margin="normal"
  //                   variant="outlined"
  //                 />
  //                 {errors.username && touched.username && (
  //                   <div className="feedback">{errors.username}</div>
  //                 )}
  //                 <label htmlFor="password">Password</label>
  //                 <TextField
  //                   name="password"
  //                   type="password"
  //                   placeholder="Enter your password"
  //                   value={values.password}
  //                   onChange={handleChange}
  //                   onBlur={handleBlur}
  //                   className={errors.password && touched.password && "error"}
  //                   margin="normal"
  //                   variant="outlined"
  //                 />
  //                 {errors.password && touched.password && (
  //                   <div className="feedback">{errors.password}</div>
  //                 )}
  //               </SignUpWrapper>
  //               <SignUpButton
  //                 variant="contained"
  //                 color="primary"
  //                 type="submit"
  //                 disabled={isSubmitting}
  //               >
  //                 Next Step
  //               </SignUpButton>
  //             </StyledForm>
  //           );
  //         }}
  //       </Formik>
  //     </div>
  //   );
};

export default StartMeal;
