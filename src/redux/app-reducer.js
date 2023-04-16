import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZE-SUCCESS';

let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }

        default:
            return state;
    }
}

export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS,
    }
}

//THUNK
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    //smth
    //smth
    Promise.all([promise])
        .then(() => {
        dispatch(initializedSuccess());
    })
}

export default appReducer;