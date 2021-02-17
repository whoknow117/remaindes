import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Remaindes from "./components/Remaindes/Remaindes";
import AddRemaindes from "./components/AddRemaindes/AddRemaindes";
import Menu from "./components/Menu/Menu";



type AppPropsType = {

}

function App(props:AppPropsType) {






  return (
    <div className="App">
        <Menu/>
        <div className="routeWrapper">
            <Route exact path='/remaindes'
                   render={() => <Remaindes  />}/>
            <Route path="/addRemaindes"
                   render={() => <AddRemaindes />}/>
        </div>
    </div>
  );
}

export default App;
