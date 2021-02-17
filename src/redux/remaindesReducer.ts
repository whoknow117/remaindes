import {v1} from "uuid";
import {RemaindesPageType} from "../types/types";
import {ActionsType, DeleteValueActionType} from "../types/types";


let InitialState: RemaindesPageType = {
    hoses: [
        {id:v1(),title: 'Туман 32', remaindes: [
                {id: v1(),value: '3м,'},
                {id: v1(),value: '3м,'},
            ]},
        {id:v1(),title: 'Туман 40', remaindes: [
                {id: v1(),value: '1м,'},
                {id: v1(),value: '5м,'},
            ]},
    ]
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
        default: {
            return state;
        }
    }

}

export default remaindesReducer;