import {v1} from "uuid";
import { AddValuesPage } from "../types/types";
import {ActionsType   } from "../types/types";



let InitialState: AddValuesPage = {

}






const addRemaindesReducer = (state = InitialState, action: ActionsType): AddValuesPage  =>  {
    switch (action.type) {

        default: {
            return state;
        }
    }

}

export default addRemaindesReducer;