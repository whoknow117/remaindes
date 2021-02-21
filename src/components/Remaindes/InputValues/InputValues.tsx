import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import classes from './InputValues.module.scss';
import {useDispatch} from "react-redux";
import {AddValueAC} from "../../../redux/addRemReduer";



type InputValuesPropsType = {
    mode: boolean
    itemID: string
}



const  InputValues:React.FC<InputValuesPropsType> = ({itemID,mode }) => {

    const [values, setValues] = useState<string>('')
    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValues(e.currentTarget.value)
    }
    const dispatch = useDispatch()

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
            <input onKeyPress={onKeyPressHandler} className={classes.input} value={values} onChange={onChangeValue} type="text"/>
            <button className={classes.btn} onClick={setValuesCallback}>добавить остаток</button>
        </div>
    )

}

export default InputValues;