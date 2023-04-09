import React from "react";
import css from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const setActive = ({isActive}) => isActive ? css.active : css.dialog;

const DialogItem = (props) => {
    return (

        <div /*className={css.dialog}*/>
            <NavLink className={setActive} to={"/dialogs/" + props.id}>
                {props.name}
            </NavLink>

        </div>
    )
}

export default DialogItem;