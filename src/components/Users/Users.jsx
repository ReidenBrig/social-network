import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
    return <div>
        <Paginator currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   totalUsersCount={totalUsersCount}
                   pageSize={pageSize}/>
        <div>
            {
                users.map(user => <User user={user}
                                        followingInProgress={props.followingInProgress}
                                        unfollow={props.unfollow}
                                        follow={props.follow}
                                        key={user.id}
                    />
                )
            }
        </div>
    </div>
}

export default Users;