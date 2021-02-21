import {v1} from "uuid";
import {AddItemActionType, HoseProductType, RemaindesPageType} from "../types/types";
import {ActionsType, DeleteValueActionType} from "../types/types";










export const AddItemAC = (title:string ): AddItemActionType => {
    return {
        type: "ADD-ITEM",
        title,
        itemID: v1()

    }
}

export const DeleteValueAC = (itemID:string):DeleteValueActionType => {
    return {
        type: "DELETE-VALUE",
        itemID
    }
}




let InitialState: Array<HoseProductType> =  [

]

// localStorage.setItem('initial', JSON.stringify(InitialState))
//
// let initialStorage = localStorage.getItem('initial')
//
// let inStore = JSON.parse(initialStorage ? initialStorage : '{}')

let local = localStorage.getItem('local')

// let localStore:Array<HoseProductType> = JSON.parse(local  ? local : '{}')


const remaindesReducer = (state  = InitialState , action: ActionsType): Array<HoseProductType>  =>  {

    switch (action.type) {
        case "DELETE-VALUE": {

            let copyState = state.filter((tl => tl.id !== action.itemID ))
            localStorage.setItem('local', JSON.stringify(copyState))
            return copyState
        }
        case "ADD-ITEM": {
            let copyState = [...state]

            let newItem: HoseProductType = {
                id: action.itemID,
                title: action.title
            }
            copyState.push(newItem)

            localStorage.setItem('local', JSON.stringify(copyState))

            return copyState;
        }
        default: {
            return state;
        }
    }

}

export default remaindesReducer;