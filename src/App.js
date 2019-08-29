import React from "react";
import "./App.css";
import FullWidthTabs from "./components/signup-login/SignupLoginTab";
import CreatePotluckForm from "./components/create-potluck/CreatePotluckForm";
import Dashboard from "./components/create-potluck/user-dashboard/UserDashboard";
import Volunteer from "./components/Volunteer";
import { Route } from "react-router-dom";
import Login from "./components/signup-login/Login";
function App() {
  return (
    <div className="App">
      <FullWidthTabs />
      {/* <Dashboard />
      <CreatePotluckForm />
      <Volunteer /> */}
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
