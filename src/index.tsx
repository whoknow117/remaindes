import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import store, {StateType} from "./redux/store";
import {Provider} from "react-redux";



let rerenderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <BrowserRouter>

            <App store={store} />

        </BrowserRouter>

        ,
        document.getElementById('root')
    );
}

let storage = localStorage.getItem('reduxState')
let local = JSON.parse(storage ? storage : '{}')

rerenderEntireTree(local)
store.subscribe(() => {
    localStorage.setItem('reduxState',JSON.stringify(store.getState()));
})



