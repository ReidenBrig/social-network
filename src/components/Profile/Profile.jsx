import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {updateUserStatus} from "../../redux/profile-reducer";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateUserStatus={props.updateUserStatus}
            />
            <MyPostsContainer
                // store={props.store}
            />
        </div>
    )

}

export default Profile;