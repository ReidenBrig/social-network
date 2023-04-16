import React, {useEffect, useState} from "react";


const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);

    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{status || 'No status'}</span>
                </div>
            }
            {editMode &&
                <div>
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