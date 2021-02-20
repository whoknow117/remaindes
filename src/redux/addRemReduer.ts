import {v1} from "uuid";
import {
    AddValueActionType,
    AddValuesPage,
    ChangeValueTitleActionType,
    RemaindesType
} from "../types/types";
import {ActionsType   } from "../types/types";



let InitialState: AddValuesPage = {

}

export const ChangeValueTitle = (valID: string, title: string, productID: string): ChangeValueTitleActionType => {
    return {
        type: "CHANGE-VALUE-TITLE",
        title,
        productID,
        valID,
    }
}

export const AddValueAC = (value:string, itemID:string):AddValueActionType => {
    return {
        type: "ADD-VALUE",
        value,
        itemID
    }
}

let values = localStorage.getItem('values')
let valuesStorage:AddValuesPage = JSON.parse(values ? values : "")


const addRemaindesReducer = (state = valuesStorage, action: ActionsType): AddValuesPage  =>  {
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
            localStorage.setItem('values', JSON.stringify(copyState))
            return copyState
        }
        case "DELETE-VALUE": {
            delete state[action.itemID];
            return state;
        }
        case "CHANGE-VALUE-TITLE": {
            return  {...state,[action.productID]: state[action.productID]
                    .map( val => {
                        if(val.id === action.productID) {
                            return {...val, value : action.title}
                        }
                        else return val
                    })}

        }
        default: {
            return state;
        }
    }

}

export default addRemaindesReducer;