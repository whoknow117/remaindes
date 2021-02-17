

export type DeleteValueActionType = {
    type: "DELETE-VALUE"
    itemID: string
}

export type ActionsType = DeleteValueActionType

export type RemaindesPageType = {
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