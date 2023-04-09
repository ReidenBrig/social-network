import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: "It's my first post", likesCount: 0},
                {id: 2, message: "Hello, how are you?", likesCount: 2},
                {id: 3, message: "Post 3", likesCount: 3},
                {id: 4, message: "Post 4", likesCount: 4}
            ],
            newPostText: 'First state',
        },
        dialogsPage: {
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
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log('state is changed')
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
      return this._state;
    },

    // _addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0,
    //     };
    //
    //     this._state.profilePage.postsData.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },

    // _updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },

    dispatch(action) {
        this._state.profilePage = profileReducer( this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer( this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);


        //type: 'ADD-POST'
        // if (action.type === ADD_POST) {
        //     // this._addPost(); //вариант при котором все функции выше, а здесь просто вызываются
        //
        //
        //     let newPost = {
        //         id: 5,
        //         message: this._state.profilePage.newPostText,
        //         likesCount: 0,
        //     };
        //
        //     this._state.profilePage.postsData.push(newPost);
        //     this._state.profilePage.newPostText = '';
        //     this._callSubscriber(this._state);
        //
        // }
        // else if (action.type === UPDATE_NEW_POST_TEST) {
        //     // this._updateNewPostText(action.newText)
        //
        //     this._state.profilePage.newPostText = action.newText;
        //     this._callSubscriber(this._state);
        // }
        // else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        //     this._state.dialogsPage.newMessageBody = action.body;
        //     this._callSubscriber(this._state);
        // }
        // else if (action.type === SEND_MESSAGE) {
        //     let body = this._state.dialogsPage.newMessageBody;
        //     this._state.dialogsPage.newMessageBody = '';
        //     this._state.dialogsPage.messagesData.push( {id: 6, message: body} )
        //     this._callSubscriber(this._state);
        // }
    }
}








export default store;
window.store = store;