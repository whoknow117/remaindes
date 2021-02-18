export type DeleteValueActionType = {
    type: "DELETE-VALUE"
    itemID: string
}

export type AddItemActionType = {
    type: "ADD-ITEM"
    title: string
    itemID: string

}
export type AddValueActionType = {
    type: "ADD-VALUE"
    value: string
    itemID:string
}

export type ActionsType = DeleteValueActionType | AddItemActionType | AddValueActionType

export type RemaindesPageType = {
    hoses: HosesType
}


export type HosesType = Array<HoseProductType>


export type HoseProductType = {
    id: string
    title: string

}
export type RemaindesType = {
    id: string
    value: string
}

export type AddValuesPage = {
    [key: string]: Array<RemaindesType>
}