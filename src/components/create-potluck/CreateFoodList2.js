import React, { useState } from 'react';
import { Formik, Form, Field, FieldArray, withFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';
import { TextField } from 'formik-material-ui';
import "../../App.css";
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutline from '@material-ui/icons/RemoveCircleOutline';

const CreateFoodList = (props) => {
  const [foodItems, setFoodItems] = useState({recipe_name: ""});
  const id = props.match.params.id;
  return (
    <div>
      <Formik
        initialValues={{ food: [] }}
        onSubmit={values => {
          console.log("FOOD", values);
          const headers = {
            'Authorization': localStorage.getItem('token'),
            'Content-Type': 'application/json',
          };
          axios
              .post(
                `https://potluck-planner-bw.herokuapp.com/events/${id}/recipes`,
                values, {header: headers}
              )
              .then(res => setFoodItems(res.data))
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
                        <RemoveCircleOutline onClick={() => arrayHelpers.remove(index)}/>
                        <AddCircleOutline onClick={() => arrayHelpers.insert(index, "")}/>
                      </div>
                    ))
                  ) : (
                    <button type="button" onClick={() => arrayHelpers.push("")}>
                      Add a food item
                    </button>
                  )}
                  <div>
                    <Link to="/foodlist">
                      <button type="submit">Submit</button>
                    </Link>
                    
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
