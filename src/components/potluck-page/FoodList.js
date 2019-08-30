import React from 'react'


function FoodList(props) {
  console.log("PROPS", props)
  return props.foodItems.map(foodItem => {
    return (
      <p>{foodItem.recipe_name}</p>
    )
  })
}

export default FoodList
