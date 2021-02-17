import React from 'react';
import classes from './AddRemaindes.module.scss';

type AddRemaindesType = {

}

const AddRemaindes:React.FC<AddRemaindesType> = () => {
    return (
        <div className={classes.addRemaindes}>
            <input type="text"/>
            <input type="text"/>
            <button>Добавить товар</button>
        </div>
    )
}

export default AddRemaindes;