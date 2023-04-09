import React from "react";
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
// import StoreContext from "../../../StoreContext";
// import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";


/*const MyPostsContainer = (props) => {
    // let state = props.store.getState();

    //перенос в разметку
    // const addPost = () => {
    //     props.store.dispatch(addPostActionCreator());
    // }
    //
    // const onPostChange = (text) => {
    //     let action = (updateNewPostTextActionCreator(text));
    //     props.store.dispatch(action);
    // }

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    const addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }

                    const onPostChange = (text) => {
                        let action = (updateNewPostTextActionCreator(text));
                        store.dispatch(action);
                    }

                    return <MyPosts
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        postsData={state.profilePage.postsData}
                        newPostText={state.profilePage.newPostText}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}*/

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;