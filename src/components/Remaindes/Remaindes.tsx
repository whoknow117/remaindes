import React, {ChangeEvent, useState} from 'react';
import classes from './Remaindes.module.scss';
import {StateType} from "../../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {AddValuesPage, HoseProductType, RemaindesStateType} from "../../types/types";
import {AddItemAC, DeleteValueAC} from "../../redux/remaindesReducer";

import InputValues from "./InputValues/InputValues";
import DeleteIcon from "../../assets/DeleteIcon/DeleteIcon";
import Values from "./Values/Values";
import RemaindesValues from "./RemaindesValues/RemaindesValues";

type RemaindesType = {
    productID: string
    title: string
    data: Array<RemaindesStateType>
}

const Remaindes: React.FC<RemaindesType> = ({productID, title,data}) => {




    const valuesPage = useSelector<StateType, AddValuesPage>( state => state.valuesPage)



    const [mode, setMode] = useState<boolean>(true)






    return (
        <div className={classes.remaindesPage}>
            <div>{title}</div>
            <div className={classes.valueWrapper}>
                {data.map( val => {
                    return <RemaindesValues
                        key={val.id}
                        value={val.value}
                        mode={mode}
                        productID={productID}/>

                })}
            </div>
            <InputValues itemID={productID}/>
        </div>
    )
}

export default Remaindes;





{/*<div className={classes.remaindes}>*/}
{/*    {state.map(h => {*/}

{/*        return <div className={classes.wrapper} key={h.id}>*/}


{/*               <div className={classes.valueWrapper}>*/}
{/*                   <button className={classes.delete} onClick={() => {*/}
{/*                   dispatch(DeleteValueAC(h.id))}*/}
{/*                   }>*/}
{/*                       <DeleteIcon/>*/}
{/*                   </button>*/}
{/*                   <div className={classes.title}>{h.title} </div>*/}
{/*                   <div className={classes.value}>*/}
{/*                        <RemaindesValues productID={h.id}/>*/}
{/*                   </div>*/}
{/*                   <InputValues itemID={h.id}/>*/}
{/*               </div>*/}

{/*        </div>*/}
{/*    })}*/}

{/*</div>*/}