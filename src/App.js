import React from 'react';
import './App.css';
import FullWidthTabs from './components/signup-login/SignupLoginTab';
import Potluck from './components/potluck-page/Potluck';

function App() {
  return (
    <div className="App">
     <Potluck />
     {/* <FullWidthTabs /> */}
    </div>
  );
}

export default App;
