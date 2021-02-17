import React from 'react';
import classes from './Remaindes.module.scss';
import {StateType} from "../../redux/store";
import {useSelector} from "react-redux";
import {RemaindesPageType} from "../../types/types";

type RemaindesType = {

}

const Remaindes: React.FC<RemaindesType> = ( ) => {

    let remaindesPage = useSelector<StateType,RemaindesPageType>( state => state.remaindesPage)


    return (
        <div className={classes.remaindes}>
            {remaindesPage.hoses.map(h => {
                return <div className={classes.wrapper} key={h.id}>
                    <div className={classes.title}>{h.title}: </div>
                    <div className={classes.value}>
                        {h.remaindes.map(r => <div key={r.id}> {r.value}</div>)}
                    </div>
                </div>
            })}

        </div>
    )
}

export default Remaindes;