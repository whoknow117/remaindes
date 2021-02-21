import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Remaindes from "./components/Remaindes/Remaindes";
import AddRemaindes from "./components/AddRemaindes/AddRemaindes";
import {useDispatch, useSelector} from "react-redux";
import {addLocalStorageAC} from "./redux/remaindesReducer";
import {StateType} from "./redux/store";
import {HoseProductType} from "./types/types";


type AppPropsType = {}

function App(props: AppPropsType) {




    return (
        <div className="App">
            <div className="routeWrapper">
                <Remaindes/>
            </div>
        </div>
    );
}

export default App;
