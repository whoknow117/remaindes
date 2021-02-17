import React from 'react';
import classes from './Menu.module.scss';
import {NavLink} from "react-router-dom";

type MenyType = {

}

const Menu:React.FC<MenyType> = () => {
    return (
        <header className={classes.header}>
            <ul className={classes.menu}>
                <li className={classes.item}>
                  <NavLink to={'/remaindes'}>Посмотреть остатки</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to={'/addRemaindes'}>Добавить остатки</NavLink>
                </li>
            </ul>
        </header>
    )
}

export default Menu;