import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import SignUp from "./components/signup-login/SignUp";
import Login from "./components/signup-login/Login";
import LoggedInRouter from "./components/LoggedInRouter"
import axios from "axios"

function App(props) {
  // const [foodList, setFoodList] = useState(["first food"]);
  // const displayFoodList = food => {
  //   setFoodList([food, ...foodList ]) 
  // } // state should be set in event

  // user-id="res.data.user_id"
  const [event, setEvent] = useState({
    event_name: "",
    date: "",
    time: "",
    address: "",
    city: "",
    state: ""
  });

  const [token, setToken, removeToken] = useCustomHook("token");
  let createEventCall = (newEvent) => {axios
      .post(`https://potluck-planner-bw.herokuapp.com/users/${props.match.params.id}/events`, newEvent )
      .then(res => {
        console.log(res);
        setEvent(res.data);
        let id = res.data.event_id
        props.history.push(`/events/${id}/createpotluckform`);
      })
      .catch(err => console.log(err.response));
    }

  

  return (
    <div className="App">
       {token ? <LoggedInRouter /> : <Login />}
      <Route exact path="/" component={SignUp} />
      <Route exact path="/users/login" component={Login} />
    </div>
  );
}

function useCustomHook(name) {
  // Use a hook like you normally would
  const [storage, setStorage] = useState(localStorage.getItem(name));

  // Create your custom functions to manipulate the hook as needed
  const placeInStorage = value => {
    localStorage.setItem(name, value);
    setStorage(value);
  };
  const removeFromStorage = () => {
    // If you want to be fancy, you could merge with the function above
    // and just check for an empty 'value' and removeItem in that case
    localStorage.removeItem(name);
    setStorage();
  };
  // Return your custom functions in an array or in an object
  // Main difference is array requires following the order but you can name them
  // whatever you want when you destructure (as I did above)
  // Object doesn't care in what order you destructure BUT you have to use
  // the key names
  return [storage, placeInStorage, removeFromStorage];
}

export default App;
