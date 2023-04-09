import React from "react";
import logo from './img/logo.png';

import css from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={css.header}>
            <img src={logo}/>

            <div className={css.loginBlock}>
                {
                    props.isAuth
                        ? <div>
                            <span>Hello, {props.login}! </span>
                            <button onClick={props.logout}>Log Out</button>
                        </div>
                        : <NavLink to={'/login/*'}>
                            Log in
                        </NavLink>
                }

            </div>
        </header>
    )
}

export default Header;