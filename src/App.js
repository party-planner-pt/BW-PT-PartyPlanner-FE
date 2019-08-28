import React from "react";
import "./App.css";
import FullWidthTabs from "./components/signup-login/SignupLoginTab";
import StartMeal from "./src/components/create-potluck/user-dashboard";
function App() {
  return (
    <div className="App">
      <FullWidthTabs />
      <StartMeal />
    </div>
  );
}

export default App;
