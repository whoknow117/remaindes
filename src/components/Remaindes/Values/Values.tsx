import React, {useState} from 'react';
import classes from './Values.module.scss';

type ValuesPropsType = {
    value: string
}


const Values:React.FC<ValuesPropsType> = ({value}) => {

    const [mode,setMode] = useState<boolean>(false)
    const [valueTitle, setValueTitle] = useState<string>("")

    return   (
        <div className={classes.valueItem}>
            { !mode ? <input type="text"/> : <div>{value}</div>}
        </div>
    )


}

export default Values;