import React from "react";
import logo from './img/logo.png';

import css from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <header className={css.header}>
            <img src={logo}/>

            <div className={css.loginBlock}>
                <NavLink to={'/login'}>
                    Log in
                </NavLink>
            </div>
        </header>
    )
}

export default Header;