// import React, { useState } from "react";
// import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
// import RemoveCircleOutline from '@material-ui/icons/RemoveCircleOutline';
// import { Link } from 'react-router-dom';
// import FoodList from "./../potluck-page/FoodList"

// function CreateFoodList2(props) {
//   const [foodItem, setFoodItem] = useState([]);


//   function changeHandler(i, event) {
//     const values = [...foodItem];
//     values[i].value = event.target.value;
//     setFoodItem(values);
//     console.log("fooditem", [...foodItem])
//   }

//   const submitForm = event => {
//     event.preventDefault();
//   const listOfFood = {
//     ...foodItem
//   }
//   console.log("list of food:", listOfFood)
//     props.displayFoodList(listOfFood);
//   }

//   function handleAdd() {
//     const values = [...foodItem];
//     values.push({ value: null });
//     setFoodItem(values);
//   }

//   function handleRemove(i) {
//     const values = [...foodItem];
//     values.splice(i, 1);
//     setFoodItem(values);
//   }
//   return (
//     <div>
//       {foodItem.map((food, idx) => {
//         return (
//           <div key={`${food}-${idx}`}>
//             <form onSubmit={submitForm}>
//             <input
//               type="text"
//               value={food.value || ""}
//               onChange={e => changeHandler(idx, e)}
//             />
//             <RemoveCircleOutline onClick={() => handleRemove(idx)}/>
//             </form>
//           </div>       
//         );
//       })}
//       <button type="button" onClick={() => handleAdd()}>
//         Add a food item
//       </button>
//       <Link to="/foodlist">
//         <button type="submit">Submit</button>
//       </Link>
//     </div>
//   );
// }

// export default CreateFoodList2