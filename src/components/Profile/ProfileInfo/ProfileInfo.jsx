import React from "react";

import css from './ProfileInfo.module.css';
import Profile from "../Profile";
import Preloader from "../../common/Preloder/Preloader";
import ProfileStatus from "./ProfileStatus";



const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
          {/*  <div>
                <img className={css.content_img}
                    src='https://phonoteka.org/uploads/posts/2021-04/1618631414_42-phonoteka_org-p-povtoryayushchiisya-fon-55.png'/>
            </div>*/}
            <div className={css.descriptionBlock}>

               <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />

                {/*ava + dis*/}
            </div>
        </div>
    )

}

export default ProfileInfo;