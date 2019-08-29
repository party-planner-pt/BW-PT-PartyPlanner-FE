import React from "react";
import "./App.css";
import FullWidthTabs from "./components/signup-login/SignupLoginTab";
import FormikCreateFoodList from "./components/create-potluck/CreateFoodList";

function App() {
  return (
    <div className="App">
      {/* <FullWidthTabs /> */}
      <FormikCreateFoodList />
    </div>
  );
}

export default App;
