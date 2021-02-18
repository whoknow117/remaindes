import React, {ChangeEvent, useState} from 'react';
import classes from './AddRemaindes.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {AddItemAC} from "../../redux/remaindesReducer";
import {AddValueAC} from "../../redux/addRemReduer";
import {StateType} from "../../redux/store";
import {HoseProductType} from "../../types/types";

type AddRemaindesType = {

}

const AddRemaindes:React.FC<AddRemaindesType> = () => {


    const remaindes = useSelector<StateType,Array<HoseProductType>>(state => state.remaindesPage)

    let dispatch = useDispatch();

    const [title,setTitle] = useState<string>('')

    const [values, setValues] = useState<string>('')

    const addItemCallback = () => {
        dispatch(AddItemAC(title));

    }


    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValues(e.currentTarget.value)
    }

    const onChangeTitle = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        <div className={classes.addRemaindes}>
            {remaindes.map(r => {
                return (
                    <div>

                    </div>
                )
            })}
        </div>
    )
}

export default AddRemaindes;