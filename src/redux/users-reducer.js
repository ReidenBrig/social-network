const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE--BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: "Alex"},
        {id: 2, name: "Ebert"},
        {id: 3, name: "August"},
        {id: 4, name: "Loki"},
        {id: 5, name: "Pol"}
    ],
    messagesData: [
        {id: 1, message: "Hello"},
        {id: 2, message: "Hi"},
        {id: 3, message: "How are you?"},
        {id: 4, message: "Ok"}
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {

    let stateCopy;
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
             return {
                ...state,
                newMessageBody: action.body,
            };


        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return  {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, {id: 6, message: body}],
            };

        default:
            return state;
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
}

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}

export default dialogsReducer;