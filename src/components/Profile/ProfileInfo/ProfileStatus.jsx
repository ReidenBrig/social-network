import React from "react";


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            // ...this.state,
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            // ...this.state,
            editMode: false
        });
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status:  e.currentTarget.value
        });

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log('componentDidUpdate');
       if (prevProps.status !== this.props.status) {
           this.setState({
               state: this.props.status
           })
           }
    }

    render() {
        // console.log('render');

        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || 'No status'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                               value={this.state.status}/>
                    </div>
                }
            </div>

        )
    }
}

export default ProfileStatus;