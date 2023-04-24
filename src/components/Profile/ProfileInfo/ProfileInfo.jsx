import React, {useState} from "react";

import css from './ProfileInfo.module.css';
import Preloader from "../../common/Preloder/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

import userPhoto from './../../../assets/images/logoUsers.png'
import download from './../../../assets/images/download.png'

import './ProfileInfo.css'
import edit from "../../../assets/images/edit.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData)
            .then(() => {
                setEditMode(false)
            })
    }


    return (
        <div className={css.userInfo}>
            {/*  <div>
                <img className={css.content_img}
                    src='https://phonoteka.org/uploads/posts/2021-04/1618631414_42-phonoteka_org-p-povtoryayushchiisya-fon-55.png'/>
            </div>*/}
            <div className={css.descriptionBlock}>

                <img src={props.profile.photos.large || userPhoto} className={css.mainPhoto}/>
                {
                    props.isOwner &&
                    <div className="input__wrapper">
                        <input onChange={onMainPhotoSelected} name="file" type="file" id="input__file"
                               className="input input__file" multiple/>
                        <label htmlFor="input__file" className="input__file-button">
                                <span className="input__file-icon-wrapper">
                                    <img className="input__file-icon" src={download} alt="Выбрать файл"
                                         width="25"/></span>
                            <span className="input__file-button-text">Change avatar</span>
                        </label>
                    </div>
                }
                <ProfileStatusWithHooks
                    isOwner={props.isOwner}
                    status={props.status}
                    updateUserStatus={props.updateUserStatus}/>


            </div>
            <div>
                {
                    editMode ?
                        <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/> :
                        <ProfileData profile={props.profile} isOwner={props.isOwner}
                                     toEditMode={() => {
                                         setEditMode(true)
                                     }}
                        />

                }
            </div>
        </div>
    )

}

const ProfileData = (props) => {
    return (

        <div className={css.profileData}>
            <div>
                {
                    props.isOwner && <div>
                        <button onClick={props.toEditMode} className={css.editMode}>Edit info
                            <img className={css.editImg} src={edit} alt="edit"/>
                        </button>
                    </div>
                }

                <div className={css.profileDataItem}>
                    <b>Full name: </b> {props.profile.fullName}
                </div>
                <div className={css.profileDataItem}>
                    <b> Looking for a job: </b>
                    {props.profile.lookingForAJob ? "yes" : "no"}
                </div>
                {
                    props.profile.lookingForAJob &&
                    <div  className={css.profileDataItem}>
                        <b> My professional skills: </b>
                        {props.profile.lookingForAJobDescription}
                    </div>
                }
                <div className={css.profileDataItem}>
                    <b>About me: </b>
                    {props.profile.aboutMe}
                </div>
            </div>
            <div>
                <b>Contacts: </b>{Object.keys(props.profile.contacts).map(key => {
                return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
}


export const Contacts = ({contactTitle, contactValue}) => {
    return (
        <div className={css.contact}>
            <b>{contactTitle}: </b> <a href={contactValue} target="_blank">{contactValue}</a>
            {/*{createField('', "", [], Input)}*/}

        </div>
    )
}

export default ProfileInfo;