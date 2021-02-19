import {v1} from "uuid";
import {AddItemActionType, HoseProductType, RemaindesPageType} from "../types/types";
import {ActionsType, DeleteValueActionType} from "../types/types";

debugger;

let InitialState: Array<HoseProductType> = [

]







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


let localState  = localStorage.getItem('local')

let parseLocalState:Array<HoseProductType>  = JSON.parse(localState ? localState : "")

const remaindesReducer = (state = parseLocalState, action: ActionsType): Array<HoseProductType>  =>  {
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