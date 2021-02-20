import React, {ChangeEvent, useState} from 'react';
import classes from './Remaindes.module.scss';
import {StateType} from "../../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {AddValuesPage, HoseProductType} from "../../types/types";
import {AddItemAC, DeleteValueAC} from "../../redux/remaindesReducer";

import InputValues from "./InputValues/InputValues";
import DeleteIcon from "../../assets/DeleteIcon/DeleteIcon";

type RemaindesType = {

}

const   Remaindes: React.FC<RemaindesType> = ( ) => {

    let state = useSelector<StateType,Array<HoseProductType>>( state => state.remaindesPage)





    let addValuesPage = useSelector<StateType,AddValuesPage>( state => state.valuesPage)

    let dispatch = useDispatch();

    const [title,setTitle] = useState<string>('')



    const addItemCallback = () => {
        dispatch(AddItemAC(title));

    }





    const onChangeTitle = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        <div className={classes.remaindesPage}>
            <div className={classes.addProductInput}>
                <h6 className={classes.logo}>Снабженец</h6>
                <input className={classes.input} value={title} onChange={onChangeTitle} type="text"/>
                <button className={classes.btn} onClick={addItemCallback}>Добавить товар</button>


            </div>
            <div className={classes.remaindes}>
                {state.map(h => {

                    return <div className={classes.wrapper} key={h.id}>


                           <div className={classes.valueWrapper}>
                               <button className={classes.delete} onClick={() => {
                               dispatch(DeleteValueAC(h.id))}
                               }>
                                   <DeleteIcon/>
                               </button>
                               <div className={classes.title}>{h.title} </div>
                               <div className={classes.value}>
                                   { addValuesPage[h.id].map(v => {

                                       return <div className={classes.valueItem}>
                                           {v.value}
                                       </div>
                                   })}
                               </div>
                               <InputValues itemID={h.id}/>
                           </div>

                    </div>
                })}

            </div>
        </div>
    )
}

export default Remaindes;