import React from 'react'
import CreatePotluckForm from "./create-potluck/CreatePotluckForm";
// import Volunteer from "./components/Volunteer";
import { Route } from "react-router-dom";
import Events from "./create-potluck/user-dashboard/UserDashboard";
import Potluck from "./potluck-page/Potluck";

function LoggedInRouter() {
  return (
    <div>
      <Route exact path="/users/:id/dashboard" component={Events} />  
      <Route exact path="/createpotluckform" render={(props)=><CreatePotluckForm {...props} createEventCall="createEventCall"
      />}/>  
      <Route exact path="/events/:id" component={Potluck} />
    </div>
  )
}

export default LoggedInRouter

// <Route exact path="events/:id/createfoodlist" render={(routeProps) => <CreateFoodList2 {...routeProps} displayFoodList={displayFoodList}/>} />  // no route, just display it after NEXT button on createpotluck form

// <Route exact path="/foodlist" render={(routeProps) => <FoodList {...routeProps} foodList={foodList}/>} /> // no route, just display it on <Potluck />

