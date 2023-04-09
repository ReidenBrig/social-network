import React from "react";
import css from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const setActive = ({isActive}) => isActive ? css.active : css.dialog;

const DialogItem = (props) => {
    return (

        <div className={css.dialog}>
            <NavLink className={setActive} to={"/dialogs/" + props.id}>
                {props.name}
            </NavLink>

        </div>
    )
}

const Message = (props) => {
    return (
        <div className={css.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: "Alex"},
        {id: 2, name: "Ebert"},
        {id: 3, name: "August"},
        {id: 4, name: "Loki"},
        {id: 5, name: "Pol"}
    ];
    let messagesData = [
        {id: 1, message: "Hello"},
        {id: 2, message: "Hi"},
        {id: 3, message: "How are you?"},
        {id: 4, message: "Ok"}
    ];


    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {
                    dialogsData.map((dialog) => (
                        <DialogItem name={dialog.name} id={dialog.id}/>
                    ))
                }
                {/*<DialogItem name="Alex" id='1'/>*/}
                {/*<DialogItem name="Ebert" id='2'/>*/}
                {/*<DialogItem name="August" id='3'/>*/}
                {/*<DialogItem name="Loki" id='4'/>*/}
                {/*<DialogItem name="Pol" id='5'/>*/}

            </div>
            <div className={css.messages}>
                {
                    messagesData.map((message) => (
                        <Message message={message.message} id={message.id}/>
                    ))
                }
                {/*<Message message="Hi"/>*/}
                {/*<Message message="Hello"/>*/}
                {/*<Message message="How are you?"/>*/}
            </div>
        </div>
    )
}
export default Dialogs;