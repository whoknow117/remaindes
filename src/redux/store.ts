import {combineReducers, createStore, Store} from "redux";
import {RemaindesPageType} from "../types/types";
import remaindesReducer from "./remaindesReducer";
import {ActionsType} from "../types/types";


export type StateType = {
    remaindesPage: RemaindesPageType


}




export type  StateReducersType = ReturnType<typeof reducers>


let reducers = combineReducers({
    remaindesPage: remaindesReducer

})

export type RootStateType = Store<StateReducersType, ActionsType>

let store = createStore(reducers);



export default store;



