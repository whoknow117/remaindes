import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Remaindes from "./components/Remaindes/Remaindes";

import HeaderInput from "./components/HeaderInput/HeaderInput";
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "./redux/store";
import {AddValuesPage, HoseProductType} from "./types/types";


type AppPropsType = {}

function App(props: AppPropsType) {


    const remaindesPage = useSelector<StateType, Array<HoseProductType>>(state => state.remaindesPage)
    const addValuesPage = useSelector<StateType, AddValuesPage>(state => state.valuesPage)

    const dispatch = useDispatch()

    return (
        <div className="App">
            <HeaderInput/>
            {remaindesPage.map(rem => {
                let ValuesState = addValuesPage[rem.id]
                return <Remaindes
                    key={rem.id}
                    productID={rem.id}
                    title={rem.title}
                    data={ValuesState}
                />
            })}


        </div>
    );
}

export default App;
