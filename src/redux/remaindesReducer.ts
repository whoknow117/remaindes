import {v1} from "uuid";
import {AddItemActionType, AddLocalActionType, HoseProductType, RemaindesPageType} from "../types/types";
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

export const addLocalStorageAC = (state: Array<HoseProductType>): AddLocalActionType => {
    return {
        type: "ADD-LOCAL",
        state
    }
}



let InitialState:Array<HoseProductType>=  [

]

let local = localStorage.getItem('storage')

let lS:Array<HoseProductType> = JSON.parse( local ? local : '{}')


const remaindesReducer = (state  = lS , action: ActionsType): Array<HoseProductType>  =>  {

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
        // case "ADD-LOCAL": {
        //     let copyState = [...state]
        //     if(copyState) {
        //         copyState = action.state
        //     }
        //     return copyState
        // }
        default: {
            return state;
        }
    }

}

export default remaindesReducer;