import React from "react";
import {connect} from "react-redux";
import {
    follow,
    getUsers,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowingProgress,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";

import css from './Users.module.css'
import Preloader from "../common/Preloder/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersFrom
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        /* this.props.toggleIsFetching(true)

         usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                 this.props.toggleIsFetching(false)
                 this.props.setUsers(data.items)
                 this.props.setTotalUsersCount(data.totalCount)
             });*/
    };

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        /*
                this.props.setCurrentPage(pageNumber);
                this.props.toggleIsFetching(true)


                usersAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
                        this.props.toggleIsFetching(false)
                        this.props.setUsers(data.items)
                    });*/
    }

    render() {
        return <div className={css.users}>
            {
                this.props.isFetching ? <Preloader/> : null

            }

            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                // toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}

            />
        </div>
    }
}

/*
const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,

    }
}*/
/*const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPagesAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}*/

const mapStateToProps = (state) => {
    return {
        users: getUsersFrom(state),
        // users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),

    }
}

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        // toggleIsFetching,
        toggleFollowingProgress,
        getUsers
    }),
    withAuthRedirect,
)(UsersContainer)