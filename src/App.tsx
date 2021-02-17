import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Remaindes from "./components/Remaindes/Remaindes";
import AddRemaindes from "./components/AddRemaindes/AddRemaindes";

function App() {
  return (
    <div className="App">
        <Route exact path='/remaindes'
               render={() => <Remaindes />}/>
        <Route path="/dialogs"
               render={() => <AddRemaindes />}/>
    </div>
  );
}

export default App;
