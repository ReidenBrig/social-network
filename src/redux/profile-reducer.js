import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEST = 'UPDATE-NEW-POST-TEST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';
const SET_PHOTO_SUCCESS = 'SET-PHOTO-SUCCESS';
const SET_PROFILE_SUCCESS = 'SET-PROFILE-SUCCESS';

let initialState = {
    postsData: [
        {id: 1, message: "It's my first post", likesCount: 0, time: '26.04.2023, 01:31:56' },
        // {id: 2, message: "Hello, how are you?", likesCount: 2},
        // {id: 3, message: "Post 3", likesCount: 3},
        // {id: 4, message: "Post 4", likesCount: 4}
    ],
    newPostText: 'First post',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: Date.now(),
                message: action.newPostText,
                time: new Date().toLocaleString(),
                // likesCount: 0,
            };

            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: '',
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos }
            }
        }
        case SET_PROFILE_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile}
            }
        }
        default:
            return state;
    }

}

//Action Creators
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
export const savePhotoSuccess = (photos) => {
    return {
        type: SET_PHOTO_SUCCESS,
        photos
    }
}
export const saveProfileSuccess = (profile) => {
    return {
        type: SET_PHOTO_SUCCESS,
        profile
    }
}


//THUNK
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data))
}

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(response.data))
}
export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
         dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;