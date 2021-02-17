import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Remaindes from "./components/Remaindes/Remaindes";
import AddRemaindes from "./components/AddRemaindes/AddRemaindes";
import Menu from "./components/Menu/Menu";
import {RootType} from "./redux/store";


type AppPropsType = {
    store: RootType
}

function App(props:AppPropsType) {


    let state = props.store.getState();



  return (
    <div className="App">
        <Menu/>
        <div className="routeWrapper">
            <Route exact path='/remaindes'
                   render={() => <Remaindes state={state} />}/>
            <Route path="/addRemaindes"
                   render={() => <AddRemaindes />}/>
        </div>
    </div>
  );
}

export default App;
