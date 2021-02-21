import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import store from "./redux/store";
import {Provider} from "react-redux";
import {saveState} from "./localStorage";


store.subscribe(()=>{
    saveState(store.getState())
})

ReactDOM.render(
    <BrowserRouter>
   <Provider store={store}>
       <App  />
   </Provider>
    </BrowserRouter>
 ,
  document.getElementById('root')
);

