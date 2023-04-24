import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helper";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE--BODY';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

const photoUrl = 'https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg';

let initialState = {
    users: [
        /* {
             id: 1,
             photoUrl: photoUrl,
             followed: false,
             fullName: "Alex",
             status: 'Learning React!',
             location: {city: "Minsk", country: 'Belarus'}
         },
         {
             id: 2,
             photoUrl: photoUrl,
             followed: false,
             fullName: "Olga",
             status: 'Hello!',
             location: {city: "Grodno", country: 'Belarus'}
         },
         {
             id: 3,
             photoUrl: photoUrl,
             followed: false,
             fullName: "Max",
             status: 'Hangry!',
             location: {city: "Vitebsk", country: 'Belarus'}
         },
         {
             id: 4,
             photoUrl: photoUrl,
             followed: true,
             fullName: "Rey",
             status: 'Dance dance dance!',
             location: {city: "Berlin", country: 'Germany'}
         },*/
    ],
    pageSize: 15,
    totalUsersCount: 100,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                // users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
              users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })

            }


        case UNFOLLOW:
            return {
                ...state,
                // users: updateObjectInArray(state.users, action.userId, "id", {followed: false})

                users: state.users.map(user => {
                      if (user.id === action.userId) {
                          return {...user, followed: false}
                      }
                      return user;
                  })

            }
        case SET_USERS:
            return {
                ...state,
                users: action.users,

            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }

        default:
            return state;
    }
}

export const followSuccess = (userId) => {
    return {
        type: FOLLOW, userId
    }
}
export const unfollowSuccess = (userId) => {
    return {
        type: UNFOLLOW, userId
    }
}
export const setUsers = (users) => {
    return {
        type: SET_USERS, users
    }
}
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE, currentPage
    }
}
export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT, count: totalUsersCount
    }
}
export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING, isFetching
    }
}
export const toggleFollowingProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId
    }
}


//THUNK
export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(setCurrentPage(currentPage));
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}


const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.follow.bind(usersAPI);
        let actionCreator = followSuccess;
        followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.unfollow.bind(usersAPI);
        let actionCreator = unfollowSuccess;
        followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
    }
}

export default usersReducer;