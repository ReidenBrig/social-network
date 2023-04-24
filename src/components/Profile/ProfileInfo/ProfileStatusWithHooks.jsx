import React, {useEffect, useState} from "react";

import css from './ProfileInfo.module.css'
import edit from './../../../assets/images/edit.png'


const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    const activateEditMode = () => {
        if (props.isOwner) setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);

    }

    return (
        <div className={css.statusEdit}>
            {!editMode &&
                <div>
                    <b>Status:</b>
                    <span> </span>
                    <span title="doubleClick" onDoubleClick={activateEditMode}>{status || '-No status-'}
                        {
                            props.isOwner && <img className={css.editImg} src={edit} width={'15px'} alt="edit" />
                        }
                    </span>

                </div>
            }
            {editMode &&
                <div>
                    <b>Status:</b>
                    <span> </span>
                    <input
                        onBlur={deactivateEditMode}
                        autoFocus={true}
                        value={status}
                        onChange={onStatusChange}/>
                </div>
            }
        </div>

    )

}

export default ProfileStatusWithHooks;