import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import classes from "./Rem.module.scss";
import {useDispatch} from "react-redux";
import {ChangeValueTitleAC, removeValueAC} from "../../redux/addRemReduer";


type RemType = {
    value: string
    productID: string
    valID: string

}

const Rem: React.FC<RemType> = ({value,productID,valID}) => {

    let storage = localStorage.getItem('values')

    let storageValues = JSON.parse(storage ?  storage : '{}')

    const [title, setTitle] = useState<string>(value)
    const [mode, setMode] = useState<boolean>(false)

    const dispatch = useDispatch()

  const changeMode = () => {
        setMode(!mode)
  }

  const changeNewValue = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
  }

  const changeTitleCallback = () => {
        dispatch(ChangeValueTitleAC(valID,title,productID))
        changeMode();
  }
  const deleteValue = () => {
        dispatch(removeValueAC(productID, valID))
  }
  const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>) => {
        if(e.charCode === 13) {
            changeTitleCallback()
        }
  }

    return (


            <div className={classes.valueItem}>
                <button onClick={deleteValue} className={classes.btn}>x</button>
                {mode ? <input onKeyPress={onKeyPressHandler} className={classes.input} value={title} onChange={changeNewValue} onBlur={changeTitleCallback} type="text"/> : <span onClick={changeMode}>{value}м</span>}
            </div>


    )
}

export default Rem;