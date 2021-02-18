import {combineReducers, createStore, Store} from "redux";
import {AddValuesPage, HoseProductType, RemaindesPageType} from "../types/types";
import remaindesReducer from "./remaindesReducer";
import {ActionsType} from "../types/types";
import addRemReduer from "./addRemReduer";


export type StateType = {
    remaindesPage: Array<HoseProductType>
    valuesPage: AddValuesPage

}




export type  StateReducersType = ReturnType<typeof reducers>


let reducers = combineReducers({
    remaindesPage: remaindesReducer,
    valuesPage: addRemReduer

})

export type RootStateType = Store<StateReducersType, ActionsType>

let store = createStore(reducers);



export default store;



