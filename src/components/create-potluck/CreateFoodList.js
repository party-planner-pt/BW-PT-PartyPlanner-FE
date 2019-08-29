import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { TextField } from 'formik-material-ui';
import "../../App.css";
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';

const CreateFoodList = () => {
  return (
  //   const [thetokens, setToken] = useState({ username: "", password: "" });

  // const handleChange = event => {
  //   setToken({ ...thetokens, [event.target.name]: event.target.value });
  // };

  // const handleSubmit = event => {
  //   event.preventDefault();
  // };
  <div>
    <Formik
      initialValues={{ food: [] }}
      onSubmit={values => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500);
        axios
            .post(
              // "https://potluck-planner-bw.herokuapp.com/users/login",
              values
            )
            .then(res => {
              console.log(res);
              // localStorage.setItem("token", res.data.token);
              // props.history.push("/createfoodlist")
            })
            .catch(err => console.log(err.response));  
      }
      }
      render={({ values }) => (
        <Form>
          <FieldArray
            name="food"
            render={arrayHelpers => (
              <div>
                {values.food && values.food.length > 0 ? (
                  values.food.map((foodItem, index) => (
                    <div key={index}>
                      <Field 
                        name={`food.${index}`}
                        component={TextField}
                      />
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                      >
                        +
                      </button>
                    </div>
                  ))
                ) : (
                  <button type="button" onClick={() => arrayHelpers.push("")}>
                    {/* show this when user has removed all friends from the list */}
                    Add a food setFoodItems
                  </button>
                )}
                <div>
                  <button type="submit">Submit</button>
                </div>
              </div>
            )}
          />
        </Form>
      )}
    />
  </div>
)};

export default CreateFoodList
