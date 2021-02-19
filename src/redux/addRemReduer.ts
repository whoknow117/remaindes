import {v1} from "uuid";
import {AddValueActionType, AddValuesPage, RemaindesType} from "../types/types";
import {ActionsType   } from "../types/types";



let InitialState: AddValuesPage = {

}


export const AddValueAC = (value:string, itemID:string):AddValueActionType => {
    return {
        type: "ADD-VALUE",
        value,
        itemID
    }
}



const addRemaindesReducer = (state = InitialState, action: ActionsType): AddValuesPage  =>  {

    switch (action.type) {
        case "ADD-ITEM": {
            return {...state,[action.itemID]: []}
        }
        case "ADD-VALUE": {
            let copyState = {...state}

            let newValue: RemaindesType = {
                id: v1(),
                value: action.value

            }
            console.log(newValue)
             copyState[action.itemID].push(newValue)
            return copyState
        }
        default: {
            return state;
        }
    }

}

export default addRemaindesReducer;