import {v1} from "uuid";
import {AddItemActionType, HoseProductType, RemaindesPageType} from "../types/types";
import {ActionsType, DeleteValueActionType} from "../types/types";


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


const remaindesReducer = (state = InitialState, action: ActionsType): Array<HoseProductType>  =>  {
    switch (action.type) {
        case "DELETE-VALUE": {
            return {...state}
        }
        case "ADD-ITEM": {
            let copyState = [...state]

            let newItem: HoseProductType = {
                id: action.itemID,
                title: action.title
            }
            copyState.push(newItem)
            return copyState;
        }
        default: {
            return state;
        }
    }

}

export default remaindesReducer;