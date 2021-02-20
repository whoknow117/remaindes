import React, {useState} from 'react';
import classes from './RemaindesValues.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "../../../redux/store";
import {AddValuesPage} from "../../../types/types";
import Values from "../Values/Values";

type RemaindesValuesPropsType = {

    productID: string
}


const RemaindesValues:React.FC<RemaindesValuesPropsType> = ({productID}) => {

    let addValuesPage = useSelector<StateType,AddValuesPage>( state => state.valuesPage)

    let dispatch = useDispatch();


    return   (
        <div className={classes.remaindesValue}>
            { addValuesPage[productID].map(v => <Values key={v.id} value={v.value}/>)}
        </div>
    )


}

export default RemaindesValues;