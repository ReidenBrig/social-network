import React from "react";
import css from './Users.module.css'
import userPhoto from './../../assets/images/logoUsers.png'
import {NavLink} from "react-router-dom";


const User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={css.userBlock}>
            <div>
                <NavLink to={'./../profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto}
                         className={css.userPhoto}/>
                </NavLink>

            </div>

            <div className={css.userInfo}>

                <div>Name: {user.name}</div>
                <div>Status: {user.status || '-No status-'}</div>

                <div className={css.followBtn}>
                    {
                        user.followed ?
                            <button disabled={followingInProgress
                                .some(id => id === user.id)} onClick={() => {
                                unfollow(user.id)

                            }}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id)
                                      }}>Follow</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default User;