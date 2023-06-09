import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
                profile={props.profile}
                status={props.status}
                saveProfile={props.saveProfile}
                updateUserStatus={props.updateUserStatus}
            />
            {
                props.isOwner && <MyPostsContainer/>

            }
        </div>
    )

}

export default Profile;