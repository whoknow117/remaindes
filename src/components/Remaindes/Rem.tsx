import React, {ChangeEvent, useState} from 'react';
import classes from "./Remaindes.module.scss";


type RemType = {
    value: string
}

const Rem: React.FC<RemType> = ({value}) => {


    const [title, setTitle] = useState<string>('')
    const [mode, setMode] = useState<boolean>(false)



  const changeMode = () => {
        setMode(!mode)
  }


    return (
        <div  >

            <div className={classes.valueItem}>
                {mode ? <input onBlur={changeMode} type="text"/> : <span onClick={changeMode}>{value}</span>}
            </div>

        </div>
    )
}

export default Rem;