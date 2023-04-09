import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEST = 'UPDATE-NEW-POST-TEST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';

let initialState = {
    postsData: [
        {id: 1, message: "It's my first post", likesCount: 0},
        {id: 2, message: "Hello, how are you?", likesCount: 2},
        {id: 3, message: "Post 3", likesCount: 3},
        {id: 4, message: "Post 4", likesCount: 4}
    ],
    newPostText: 'First post',
    profile: null,
    staus: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
            };

            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: '',
            }
        }

        case SET_USER_PROFILE: {
            return  {
                ...state,
                profile: action.profile
            }
        }
        case SET_USER_STATUS: {
            return  {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }

}

export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }
}
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const setUserStatus = (status) => {
    return {
        type: SET_USER_STATUS,
        status
    }
}



//THUNK
export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(response => {
           dispatch(setUserProfile(response.data))
        });
}

export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setUserStatus(response.data))
    });
}
export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        });
}

export default profileReducer;