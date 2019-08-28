import React, {  useEffect } from "react";
import axios from 'axios'
import "./App.css";
import FullWidthTabs from "./components/signup-login/SignupLoginTab";


function App() {

  // useEffect(()=>{
    
  //   const newAccountData = { name: "myName", username: "myFakeUsername", email: "myEmail", password: "SuperSecurePassword" }
  //   axios.post("https://potluck-planner-bw.herokuapp.com/users/register", newAccountData).then(res => console.log(res.data)).catch(err=>console.log(err));
  //   }, []);

  return (
    <div className="App">
      <FullWidthTabs />
    </div>
  );
}

export default App;
