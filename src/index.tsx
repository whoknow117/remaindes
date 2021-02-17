import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import store from "./redux/store";

ReactDOM.render(
    <BrowserRouter>
    <App store={store} />
    </BrowserRouter>
 ,
  document.getElementById('root')
);

