import React, {ChangeEvent, useState} from 'react';
import classes from './InputValues.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {AddValueAC} from "../../../redux/addRemReduer";
import {StateType} from "../../../redux/store";
import {AddValuesPage} from "../../../types/types";



type InputValuesPropsType = {
    mode: boolean
    itemID: string
}



const  InputValues:React.FC<InputValuesPropsType> = ({itemID,mode }) => {

    const [values, setValues] = useState<string>('')
    const state = useSelector<StateType,AddValuesPage>( state => state.valuesPage)

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValues(e.currentTarget.value)
    }

    const dispatch = useDispatch()

    const setValuesCallback = () => {
        dispatch(AddValueAC(values, itemID))
        localStorage.setItem('values', JSON.stringify(state))
        setValues('')
    }

    return  (
        <div className={`${classes.inputValue} ${mode ? classes.active : ""}`}>
            <input  className={classes.input} value={values} onChange={onChangeValue} type="text"/>
            <button className={classes.btn} onClick={setValuesCallback}>добавить остаток</button>
        </div>
    )

}

export default InputValues;