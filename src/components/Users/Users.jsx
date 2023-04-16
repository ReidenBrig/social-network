import React from "react";
import css from './Users.module.css'
import userPhoto from './../../assets/images/logoUsers.png'
import {NavLink} from "react-router-dom";


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];

    for (let i = 1; i <= 15 /*pagesCount*/; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(page => {
                return (
                    <span
                        className={props.currentPage === page && css.selectedPage}
                        onClick={() => {
                            props.onPageChanged(page);
                        }}
                    >
                               {page} <span> </span>
                           </span>

                )
            })}
        </div>

        {
            props.users.map(user => <div key={user.id}>
                        <span>
                            <div>
                                <NavLink to={'./../profile/' + user.id}>
                                    <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                         className={css.userPhoto}/>
                                </NavLink>

                            </div>
                            <div>
                                {
                                    user.followed ?
                                        <button disabled={props.followingInProgress
                                            .some(id => id === user.id)} onClick={() => {
                                            props.unfollow(user.id)


                                            props.toggleFollowingProgress(true, user.id)
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.unfollow(user.id)
                                                    }
                                                    props.toggleFollowingProgress(false, user.id)

                                                })


                                        }}>Unfollow</button>
                                        : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                                  onClick={() => {
                                                      props.follow(user.id)


                                                      props.toggleFollowingProgress(true, user.id)

                                                          // usersAPI.follow(user.id)

                                                          /*
                                                                                                      axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                                                                                          withCredentials: true,
                                                                                                          headers: {
                                                                                                              'API-KEY': '9a8613f6-0e80-403e-9c2a-ff9cb5f21393'
                                                                                                          }
                                                                                                      })*/
                                                          .then(response => {
                                                              if (response.data.resultCode === 0) {
                                                                  props.follow(user.id)

                                                              }
                                                              props.toggleFollowingProgress(false, user.id)

                                                          })


                                                  }}>Follow</button>
                                }

                            </div>
                        </span>
                    <span>
                                <span>
                                    <div>{user.name}</div>
                                    <div>{user.status}</div>
                                </span>
                                <span>
                                    <div>{"user.location.country"}</div>
                                    <div>{"user.location.city"}</div>
                                    <div>

                                    </div>
                                </span>
                        </span>
                </div>
            )
        }

    </div>
}

export default Users;