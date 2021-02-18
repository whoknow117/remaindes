import React, {ChangeEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import {AddValueAC} from "../../../redux/addRemReduer";



type InputValuesPropsType = {

    itemID: string
}

const   InputValues:React.FC<InputValuesPropsType> = ({itemID }) => {

    const [values, setValues] = useState<string>('')

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValues(e.currentTarget.value)
    }

    const dispatch = useDispatch()

    const setValuesCallback = () => {
        dispatch(AddValueAC(values, itemID))
    }

    return  (
        <div>
            <input value={values} onChange={onChangeValue} type="text"/>
            <button onClick={setValuesCallback}>добавить остаток</button>
        </div>
    )

}

export default InputValues;