import React from 'react';
import classes from './Remaindes.module.scss';
import {StateType} from "../../redux/store";

type RemaindesType = {

    state: StateType
}

const Remaindes: React.FC<RemaindesType> = ({state}) => {
    return (
        <div className={classes.remaindes}>
            {state.hoses.map(h => {
                return <div key={h.id}>
                    <div>{h.title}</div>
                    <div>
                        {h.remaindes.map(r => <div key={r.id}>{r.value}</div>)}
                    </div>
                </div>
            })}

        </div>
    )
}

export default Remaindes;