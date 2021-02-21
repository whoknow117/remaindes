import React, {ChangeEvent, useState} from 'react';
import classes from "./Rem.module.scss";
import {useDispatch} from "react-redux";
import {ChangeValueTitleAC, removeValueAC} from "../../redux/addRemReduer";
import {RootStateType} from "../../redux/store";


type RemType = {
    value: string
    productID: string
    valID: string
    store: RootStateType
}

const Rem: React.FC<RemType> = ({value,productID,valID,store}) => {





    const [title, setTitle] = useState<string>(value)
    const [mode, setMode] = useState<boolean>(false)

    // const dispatch = useDispatch()
        const dispatch = store.dispatch
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
  // const deleteValue = () => {
  //       dispatch(removeValueAC(productID, valID))
  // }

    return (


            <div className={classes.valueItem}>
                <button  className={classes.btn}>x</button>
                {mode ? <input value={title} onChange={changeNewValue} onBlur={changeTitleCallback} type="text"/> : <span onClick={changeMode}>{value}м</span>}
            </div>


    )
}

export default Rem;