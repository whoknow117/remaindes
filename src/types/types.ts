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
    itemID: string
}

export type ChangeValueTitleActionType = {
    type: "CHANGE-VALUE-TITLE",
    title: string,
    productID: string
    valID: string
}

export type RemoveValueActionType = {
    type: "REMOVE-VALUE"
    productID: string
    valID: string
}

export type ActionsType = DeleteValueActionType
    | AddItemActionType
    | AddValueActionType
    | ChangeValueTitleActionType
    | RemoveValueActionType

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