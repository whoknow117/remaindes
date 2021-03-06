import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import classes from './Remaindes.module.scss';
import {StateType} from "../../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {AddValuesPage, HoseProductType} from "../../types/types";
import {AddItemAC, DeleteValueAC} from "../../redux/remaindesReducer";

import InputValues from "./InputValues/InputValues";
import DeleteIcon from "../../assets/DeleteIcon/DeleteIcon";
import Rem from "./Rem";
import PenIcon from "../../assets/PenIcon/PenIcon";

type RemaindesType = {}

const Remaindes: React.FC<RemaindesType> = () => {

    let state = useSelector<StateType, Array<HoseProductType>>(state => state.remaindesPage)
    let addValuesPage = useSelector<StateType, AddValuesPage>(state => state.valuesPage)
    let dispatch = useDispatch();
    const [title, setTitle] = useState<string>('')
    const [mode, setMode] = useState<boolean>(false)


    const addItemCallback = () => {
        dispatch(AddItemAC(title));
        setTitle('')

    }


    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addItemCallback()
        }
    }

    const changeMode = () => {
        setMode(!mode)
    }
    return (
        <div className={classes.remaindesPage}>
            <div className={classes.addProductInput}>
                <h6 className={classes.logo}>Снабженец</h6>
                <div className={classes.inputWrapper}>
                    <input onKeyPress={onKeyPressHandler} className={classes.input} value={title}
                           onChange={onChangeTitle} type="text"/>
                    <button className={classes.btn} onClick={addItemCallback}>Добавить товар</button>
                </div>


            </div>
            <div className={classes.remaindes}>
                {state.map(h => {

                    return <div className={classes.wrapper} key={h.id}>


                        <div className={classes.valueWrapper}>
                            <button className={classes.delete} onClick={() => {
                                dispatch(DeleteValueAC(h.id))
                            }
                            }>
                                <DeleteIcon/>
                            </button>
                            <div className={classes.title}>
                                {h.title}

                            </div>

                               <div className={classes.value}>
                                   {addValuesPage[h.id].map(v => {

                                       return <Rem
                                           key={v.id}
                                           valID={v.id}
                                           productID={h.id}
                                           value={v.value}/>
                                   })}
                               </div>


                            <InputValues mode={mode} itemID={h.id}/>
                        </div>

                    </div>
                }) }

            </div>
        </div>
    )
}

export default Remaindes;