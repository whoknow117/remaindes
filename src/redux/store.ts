import {v1} from "uuid";



export type RootType = {
    getState: () => StateType
    state: StateType
}

export type StateType = {
    hoses: HosesType
}


export type HosesType = Array<HoseProductType>



export type HoseProductType = {
    id: string
    title: string
    remaindes: Array<RemaindesType>
}
export type RemaindesType = {
    id: string
    value: string
}

const store = {

    getState() {
        return this.state;
    },

    state: {
        hoses: [
            {id:v1(),title: 'Туман 32', remaindes: [
                    {id: v1(),value: '3м'},
                    {id: v1(),value: '3м'},
                ]},
            {id:v1(),title: 'Туман 40', remaindes: [
                    {id: v1(),value: '1м'},
                    {id: v1(),value: '5м'},
                ]},
        ]
    }


}


export default store;