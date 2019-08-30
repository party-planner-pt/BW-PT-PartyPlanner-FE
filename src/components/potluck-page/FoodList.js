import React from 'react'


function FoodList(props) {
  console.log("PROPS", props)
  return props.foodList.map(foodItem => {
    return (
      <p>{foodItem}</p>
    )
  })
}

export default FoodList
