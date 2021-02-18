import React, {ChangeEvent, useState} from 'react';
import classes from './Remaindes.module.scss';
import {StateType} from "../../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {AddValuesPage, HoseProductType} from "../../types/types";
import {AddItemAC} from "../../redux/remaindesReducer";
import {AddValueAC} from "../../redux/addRemReduer";
import InputValues from "./InputValues/InputValues";

type RemaindesType = {

}

const Remaindes: React.FC<RemaindesType> = ( ) => {

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
        <div>
            <div className={classes.input}>
                <input value={title} onChange={onChangeTitle} type="text"/>
                <button onClick={addItemCallback}>Добавить товар</button>


            </div>
            <div className={classes.remaindes}>
                {state.map(h => {
                    return <div className={classes.wrapper} key={h.id}>
                        <InputValues itemID={h.id}/>

                           <div className={classes.valueWrapper}>
                               <div className={classes.title}>{h.title} </div>
                               <div className={classes.value}>
                                   {addValuesPage[h.id].map(v => {
                                       return <div className={classes.valueItem}>
                                           {v.value}
                                       </div>
                                   })}
                               </div>
                           </div>

                    </div>
                })}

            </div>
        </div>
    )
}

export default Remaindes;