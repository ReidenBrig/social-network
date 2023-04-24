import React from "react";

import css from './ProfileInfo.module.css';

import './ProfileInfo.css'
import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";

const ProfileDataForm = ({handleSubmit, profile, error}) => {

    return (
        <form className={css.profileData} onSubmit={handleSubmit}>
            <div>
                <button className={css.editMode}>Save</button>
            </div>
            {error && <div className={css.formSummaryError}>
                {error}
            </div>}

            <div>
                <b>Full name: </b>
                {/*<Field*/}
                {/*    type={"text"}*/}
                {/*    name={'fullName'}*/}
                {/*    placeholder={"Full name"}*/}
                {/*    component={Input}*/}
                {/*    validate={[]}*/}
                {/*/>*/}
                {createField('Full name', "fullName", [], Input, {})}
            </div>
            <div>
                <b> Looking for a job: </b>
                {createField('', "lookingForAJob", [], Input, {type: 'checkbox'})}
            </div>
            <div>
                <b> My professional skills: </b>
                <div>
                    {createField('My professional skills', "lookingForAJobDescription", [], Textarea)}
                </div>
            </div>
            <div>
                <b>About me: </b>
                <div>
                    {createField('About me', "aboutMe", [], Textarea)}
                </div>
            </div>
            <div>
                <b>Contacts: </b>{Object.keys(profile.contacts).map(key => {
                return <div key={key} className={css.contact}>
                    <b>{key}: {createField( key, "contacts." + key, [], Input)}
                    </b>


                </div>


            })}
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({
    form: 'edit-profile',
})(ProfileDataForm)

export default ProfileDataFormReduxForm;