import React, {ChangeEvent, useEffect, useState} from 'react';
import classes from "./Rem.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {AddValueAC, ChangeValueTitleAC, removeValueAC} from "../../redux/addRemReduer";
import {StateType} from "../../redux/store";
import {AddValuesPage} from "../../types/types";
import {addLocalStorageAC} from "../../redux/remaindesReducer";


type RemType = {
    value: string
    productID: string
    valID: string

}

const Rem: React.FC<RemType> = ({value,productID,valID}) => {




    const [title, setTitle] = useState<string>(value)
    const [mode, setMode] = useState<boolean>(false)
    const state = useSelector<StateType,AddValuesPage>( state => state.valuesPage)
    const dispatch = useDispatch()

  const changeMode = () => {
        setMode(!mode)
  }

  const changeNewValue = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
  }

  const changeTitleCallback = () => {
        dispatch(ChangeValueTitleAC(valID,value,productID))
        changeMode();

  }
  const deleteValue = () => {
        dispatch(removeValueAC(productID, valID))
      localStorage.setItem('values', JSON.stringify(state))
  }


    return (


            <div className={classes.valueItem}>
                <button onClick={deleteValue} className={classes.btn}>x</button>
                {mode ? <input value={title} onChange={changeNewValue} onBlur={changeTitleCallback} type="text"/> : <span onClick={changeMode}>{value}м</span>}
            </div>


    )
}

export default Rem;