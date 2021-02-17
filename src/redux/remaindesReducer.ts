import {v1} from "uuid";
import {AddItemActionType, HoseProductType, RemaindesPageType} from "../types/types";
import {ActionsType, DeleteValueActionType} from "../types/types";


let InitialState: RemaindesPageType = {
    hoses: [
        {id:v1(),title: 'Туман 32'},
        {id:v1(),title: 'Туман 40'}
    ]
}



export const AddItemAC = (title:string ): AddItemActionType => {
    return {
        type: "ADD-ITEM",
        title,

    }
}

export const DeleteValueAC = (itemID:string):DeleteValueActionType => {
    return {
        type: "DELETE-VALUE",
        itemID
    }
}


const remaindesReducer = (state = InitialState, action: ActionsType): RemaindesPageType  =>  {
    switch (action.type) {
        case "DELETE-VALUE": {
            return {...state}
        }
        case "ADD-ITEM": {
            let copyState = {...state}

            let newItem: HoseProductType = {
                id: v1(),
                title: action.title
            }
            copyState.hoses.push(newItem)
            return copyState;
        }
        default: {
            return state;
        }
    }

}

export default remaindesReducer;