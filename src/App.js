import React from "react";
import "./App.css";
import FullWidthTabs from "./components/signup-login/SignupLoginTab";
import Login from "./components/signup-login/Login";
import Dashboard from "./components/create-potluck/user-dashboard/UserDashboard";

function App() {
  return (
    <div className="App">
      <FullWidthTabs />
    </div>
  );
}

export default App;
