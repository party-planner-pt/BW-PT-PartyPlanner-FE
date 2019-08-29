import React from "react";
import "./App.css";
import FullWidthTabs from "./components/signup-login/SignupLoginTab";
import CreatePotluckForm from "./components/create-potluck/CreatePotluckForm";
import Dashboard from "./components/create-potluck/user-dashboard/UserDashboard";
import Volunteer from "./components/Volunteer";
import { Route } from "react-router-dom";
import Login from "./components/signup-login/Login";
import UserDashboard from './components/create-potluck/user-dashboard/UserDashboard';
import Potluck from './components/potluck-page/Potluck';
import CreateFoodList from './components/create-potluck/CreateFoodList'



function App() {
  return (
    <div className="App">
      {/* <FullWidthTabs /> */}
      {/* <Dashboard />
      <CreatePotluckForm />
      <Volunteer /> */}
      {/* <FormikCreateFoodList /> */}
      <Route exact path="/users/login" component={Login} />
      <Route exact path="/createfoodlist" component={CreateFoodList} />
      <Route exact path="/dashboard" component={UserDashboard} />
      <Route exact path="create" component={CreatePotluckForm} />
      <Route path="event/:id" component={Potluck} />
      
    </div>
  );
}

export default App;
