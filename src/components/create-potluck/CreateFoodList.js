import React, { useEffect, useState } from 'react';
import { Field, Form, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { TextField } from 'formik-material-ui';
import { FoodButton, CreateListWrapper, ListFormWrapper, ColumnOne  } from './CreatePotluckStyles';
import "../../App.css";
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';

const CreateFoodList = props => {
  const {
    handleSubmit,
    status
  } = props

  const [foodItems, setFoodItems] = useState([])

  useEffect(() => {
    if(status) {
      setFoodItems([...foodItems, status])
    }
  }, [status])

  return (
    <CreateListWrapper >
      <h2>What foods, drinks, or other items would you like people to bring?</h2>
      <Form onSubmit={handleSubmit}>
        <ListFormWrapper>
          <ColumnOne>
            <Field
              type="text"
              name="recipe_name"
              component={TextField}
              id="outlined-name"
              label="Item"
              margin="normal"
              variant="outlined"
            />
            <FoodButton className="submit-food-button food-button">Submit List</FoodButton>
          </ColumnOne>
          <AddCircleOutline />
        </ListFormWrapper>
      </Form>
        {foodItems.map(foodItem => {
          return (
            <p key={foodItem.id}>{foodItem.recipe_name}</p>
          )
        })}
    </CreateListWrapper >
  )
}

const FormikCreateFoodList = withFormik ({
  mapPropsToValues({recipe_name}) {
    return {
      recipe_name: recipe_name || "",
    }
  },

  validationSchema: Yup.object().shape({
    recipe_name: Yup.string().required(),
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    console.log("Values:",values)
    resetForm();
    axios
      .post('https://potluck-planner-bw.herokuapp.com/events/19/recipes', values) 
      .then(res => {
        console.log("res.data", res.data)
        setStatus(res.data)
      
      })
      .catch(err => console.log("DAMN", err))
  }
})(CreateFoodList)

export default FormikCreateFoodList