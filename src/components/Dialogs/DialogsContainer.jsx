import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
//переносим все в разметку для получения контекста
    let state = props.store.getState().dialogsPage;

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    const onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }


    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState().dialogsPage;

                    const onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator())
                    }

                    const onNewMessageChange = (body) => {
                        store.dispatch(updateNewMessageBodyCreator(body))
                    }

                    return <Dialogs
                        updateNewMessageBody={onNewMessageChange}
                        sendMessage={onSendMessageClick}
                        dialogsPage={state}
                    />
                }

            }
        </StoreContext.Consumer>

    )
}
export default DialogsContainer;