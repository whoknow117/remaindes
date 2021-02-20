import React, {ChangeEvent, useState} from 'react';
import classes from './HeaderInput.module.scss';
import {useDispatch} from "react-redux";
import {AddItemAC} from "../../redux/remaindesReducer";


export type HeaderInputPropsType = {

}

const HeaderInput = () => {

    let dispatch = useDispatch();

    const [title,setTitle] = useState<string>('')


    const onChangeTitle = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }


    const addItemCallback = () => {
        dispatch(AddItemAC(title));

    }

    return (
        <div className={classes.addProductInput}>
            <h6 className={classes.logo}>Снабженец</h6>
            <input className={classes.input} value={title} onChange={onChangeTitle} type="text"/>
            <button className={classes.btn} onClick={addItemCallback}>Добавить товар</button>


        </div>
    )


}


export default HeaderInput;