import {v1} from "uuid";
import {
    AddValueActionType,
    AddValuesPage,
    ChangeValueTitleActionType,
    RemaindesType
} from "../types/types";
import {ActionsType} from "../types/types";


let InitialState: AddValuesPage = {}

export const ChangeValueTitleAC = (valID: string, title: string, productID: string): ChangeValueTitleActionType => {
    return {
        type: "CHANGE-VALUE-TITLE",
        title,
        productID,
        valID,
    }
}

export const AddValueAC = (value: string, itemID: string): AddValueActionType => {
    return {
        type: "ADD-VALUE",
        value,
        itemID
    }
}
export const removeValueAC = (productID: string, valID: string) => {
    return {
        type: "REMOVE-VALUE",
        productID,
        valID
    }
}

let values = localStorage.getItem('values')
let valuesStorage: AddValuesPage = JSON.parse(values ? values : '{}')


const addRemaindesReducer = (state = valuesStorage, action: ActionsType): AddValuesPage => {
    switch (action.type) {
        case "ADD-ITEM": {

            return {...state, [action.itemID]: []}
        }
        case "ADD-VALUE": {
            let copyState = {...state}

            let newValue: RemaindesType = {
                id: v1(),
                value: action.value

            }

            copyState[action.itemID].push(newValue)
            localStorage.setItem('values', JSON.stringify(copyState))
            return copyState
        }
        case "DELETE-VALUE": {
            let copyState={...state}
            delete copyState[action.itemID];
            return copyState;
        }
        case "CHANGE-VALUE-TITLE": {
            let copyState = {...state}
            copyState[action.productID] = copyState[action.productID].filter( v => v.id === action.valID ?
            v.value = action.title : v)

            localStorage.setItem('values', JSON.stringify(copyState))
            return copyState



        }
        case "REMOVE-VALUE": {
            let copyState = {...state}

            copyState[action.productID] = copyState[action.productID].filter((tl => tl.id !== action.valID ))
            localStorage.setItem('values', JSON.stringify(copyState))
            return copyState
        }
        default: {
            return state;
        }
    }

}

export default addRemaindesReducer;


// {...state,[action.productID]: state[action.productID]
//     .map( val => {
//         if(val.id === action.productID) {
//             return {...val, value : action.title}
//         }
//         else return val
//     })}