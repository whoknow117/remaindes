import React, {KeyboardEvent, ChangeEvent, useState } from "react";
import classes from './EditableSpan.module.scss';




export type EditableSpanType = {
    // title: string
    // changeValue: (newValue: string) => void
    // modeOn?: boolean
    // bold?: boolean
value: string

}

const EditableSpan:React.FC<EditableSpanType>= ({value}) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [titleValue, setTitleValue] =useState<string>("");


    // const activatedEditMode = () => {
    //     setEditMode(true)
    // }
    // const deActivatedEditMode = () => {
    //     setEditMode(false)
    //     changeValue(titleValue)
    // }
    // const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    //
    //     setTitleValue( e.currentTarget.value)
    // }

    // const deactivateEditM = (e: KeyboardEvent<HTMLInputElement>) => {
    //
    //
    //     if(e.key === "Enter"){
    //         deActivatedEditMode()
    //     }
    //
    //
    // }

    return ( <div className={classes.wrapper}>

            {  editMode ? <input value={titleValue}  type="text"/> :
                <span >{value}</span>}
            {/*{modeOn ? <div className={classes.refactorButton}>*/}
            {/*    <button  ></button>*/}

            {/*</div> : ""}*/}

        </div>

    )
}

export default EditableSpan;


