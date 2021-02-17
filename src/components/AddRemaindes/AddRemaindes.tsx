import React, {ChangeEvent, useState} from 'react';
import classes from './AddRemaindes.module.scss';
import {useDispatch} from "react-redux";
import {AddItemAC} from "../../redux/remaindesReducer";

type AddRemaindesType = {

}

const AddRemaindes:React.FC<AddRemaindesType> = () => {

    let dispatch = useDispatch();

    const [title,setTitle] = useState<string>('')

    const addItemCallback = () => {
        dispatch(AddItemAC(title));
    }

    const onChangeTitle = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        <div className={classes.addRemaindes}>
            <input value={title} onChange={onChangeTitle} type="text"/>
            <input type="text"/>
            <button onClick={addItemCallback}>Добавить товар</button>
        </div>
    )
}

export default AddRemaindes;