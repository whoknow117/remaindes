import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Remaindes from "./components/Remaindes/Remaindes";
import AddRemaindes from "./components/AddRemaindes/AddRemaindes";




type AppPropsType = {

}

function App(props:AppPropsType) {






  return (
    <div className="App">

        <div className="routeWrapper">
             <Remaindes  />

        </div>
    </div>
  );
}

export default App;
