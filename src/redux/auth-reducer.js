import {authAPI, usersAPI} from "../api/api";
import {toggleFollowingProgress, unfollowSuccess} from "./users-reducer";

const SET_USER_DATA = 'SET_USER_DATA';
const UNFOLLOW = 'UNFOLLOW';


const photoUrl = 'https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
    // isFetching: false,
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }



        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
       type: SET_USER_DATA,
        payload: { userId, email, login, isAuth }
        }
}

//THUNK
export const getAuthUserData = () => (dispatch) => {
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }

        })

}

export const login = (email, password, rememberMe) => (dispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }

        })

}

export const logout = () => (dispatch) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }

        })

}

export default authReducer;