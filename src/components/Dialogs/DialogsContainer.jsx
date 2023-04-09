import React from "react";
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
// import StoreContext from "../../StoreContext";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

/*const DialogsContainer = (/!*props*!/) => {
//переносим все в разметку для получения контекста
    /!*let state = props.store.getState().dialogsPage;

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    const onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
*!/

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
                        dialogsPage={store.getState().dialogsPage}
                    />
                }

            }
        </StoreContext.Consumer>

    )
}*/

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))


        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);