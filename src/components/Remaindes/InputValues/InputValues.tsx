import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import classes from './InputValues.module.scss';
import {useDispatch} from "react-redux";
import {AddValueAC} from "../../../redux/addRemReduer";
import PenIcon from "../../../assets/PenIcon/PenIcon";



type InputValuesPropsType = {
    mode: boolean
    itemID: string
}



const  InputValues:React.FC<InputValuesPropsType> = ({itemID,mode }) => {

    const [values, setValues] = useState<string>('')
    const [drawMode, setDrawMode] = useState<boolean>(false)
    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValues(e.currentTarget.value)
    }
    const dispatch = useDispatch()

    const changeDrawMode = () => {
        setDrawMode(!drawMode)
    }

    const setValuesCallback = () => {
        dispatch(AddValueAC(values, itemID))
        setValues('')
    }
    const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>) => {
        if(e.charCode === 13) {
            setValuesCallback()
        }
    }
    return  (
        <div className={`${classes.inputValue} ${mode ? classes.active : ""}`}>
          <input onKeyPress={onKeyPressHandler} className={`${classes.input} ${ drawMode ? classes.active :""}`} value={values} onChange={onChangeValue} type="text"/>
            <button onClick={changeDrawMode} className={classes.btn} >
                <PenIcon/>
            </button>
        </div>
    )

}

export default InputValues;