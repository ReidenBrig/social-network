import React from "react";
import logo from './img/logo.png';

import css from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={css.header}>
            <div className={css.headerLogoText}>
                <img className={css.headerLogoTextImg} src={logo}/>
                <h1 className={css.logoText}>MiniNetwork</h1>
            </div>


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