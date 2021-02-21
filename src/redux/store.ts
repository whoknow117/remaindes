import {combineReducers, createStore, Store} from "redux";
import {AddValuesPage, HoseProductType, RemaindesPageType} from "../types/types";
import remaindesReducer from "./remaindesReducer";
import {ActionsType} from "../types/types";
import addRemReduer from "./addRemReduer";
import {loadState} from "../localStorage";


export type StateType = {
    remaindesPage: Array<HoseProductType>
    valuesPage: AddValuesPage

}

const persistedState = loadState()

export type  StateReducersType = ReturnType<typeof reducers>


let reducers = combineReducers({
    remaindesPage: remaindesReducer,
    valuesPage: addRemReduer

})

export type RootStateType = Store<StateReducersType, ActionsType>

let store = createStore(
    reducers,
    persistedState
);


export default store;



