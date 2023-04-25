import * as React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";

import css from './Dialogs.module.css'
import AddMessageFormRedux from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {


    let state = props.dialogsPage;


    let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = state.messagesData.map(m => <Message message={m.message} id={m.id} key={m.id}/>)


    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
        // alert(values.newMessageBody)
        values.newMessageBody = '';
    }

    if (!props.isAuth) {
        return <Navigate to="/login/*" replace={true}/>
    }

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={css.messages}>
                <div>{messagesElements}</div>

                <AddMessageFormRedux onSubmit={addNewMessage}/>


            </div>

        </div>
    )
}


export default Dialogs;