import React, {useState} from 'react';
import classes from './RemaindesValues.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "../../../redux/store";
import {AddValuesPage} from "../../../types/types";
import Values from "../Values/Values";
import EditableSpan from "../../EditableSpan/EditableSpan";

type RemaindesValuesPropsType = {
    value: string
    productID: string
    mode: boolean
}


const RemaindesValues:React.FC<RemaindesValuesPropsType> = ({mode,productID,value}) => {




    return  (
        <div>
            {/*<div>{productID}</div>*/}
            <EditableSpan value={value}/>
        </div>
    )






}

export default RemaindesValues;