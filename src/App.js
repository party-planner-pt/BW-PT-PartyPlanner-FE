import React, { useState } from "react";
import "./App.css";
import FullWidthTabs from "./components/signup-login/SignupLoginTab";
import CreatePotluckForm from "./components/create-potluck/CreatePotluckForm";
import Dashboard from "./components/create-potluck/user-dashboard/UserDashboard";
import Volunteer from "./components/Volunteer";
import { Route } from "react-router-dom";
import Login from "./components/signup-login/Login";
import UserDashboard from "./components/create-potluck/user-dashboard/UserDashboard";
import Potluck from "./components/potluck-page/Potluck";
import CreateFoodList from "./components/create-potluck/CreateFoodList";
import FoodList from "./components/potluck-page/FoodList";

function App() {

  const [foodItems, setFoodItems] = useState([{recipe_name: ""}]);

  const displayFoodList = foodItem => {
    setFoodItems([foodItem, ...foodItems ]) 
  }

  return (
    <div className="App">
      <Route exact path="/users/login" component={Login} />
      <Route exact path="/dashboard" component={UserDashboard} />
      <Route path="events/:id" component={Potluck} />
      <Route exact path="events/:id/createpotluckform" component={CreatePotluckForm} />
      <Route exact path="/createfoodlist" render={(routeProps) => <CreateFoodList {...routeProps} displayFoodList={displayFoodList}/>} />
      <Route exact path="/foodlist" render={(routeProps) => <FoodList {...routeProps} foodItems={foodItems}/>} />
    </div>
  );
}

export default App;
