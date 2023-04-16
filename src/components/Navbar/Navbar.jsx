import React from "react";

import css from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const setActive  = ({isActive}) => isActive ? css.active_link : css.item;

const Navbar = () => {
    return (
        <nav className={css.nav}>
            <div className={css.item} >
                <NavLink
                    className={setActive}
                    to="/profile">
                    Profile
                </NavLink>
            </div>
            <div className={css.item}>
                <NavLink
                    className={setActive}
                    to="/dialogs">Messages</NavLink>
            </div>
            <div className={css.item}>
                <NavLink
                    className={setActive}
                    to="/users">Users</NavLink>
            </div>
          {/*  <div className={css.item}>
                <NavLink
                    className={setActive}
                    to="/news">News</NavLink>
            </div>
            <div className={css.item}>
                <NavLink
                    className={setActive}
                    to="/music">Music</NavLink>
            </div>
            <div className={css.item}>
                <NavLink
                    className={setActive}
                    to="/settings">Settings</NavLink>
            </div>*/}
        </nav>
    )

}

export default Navbar;