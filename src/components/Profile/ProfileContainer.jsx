import React from "react";
import axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, setUserProfile, updateUserStatus} from "../../redux/profile-reducer";

import {
    Navigate,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


// import { useParams } from 'react-router-dom';

/*export function withRouter(Children){
    return(props)=>{

        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}*/

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 2;
        }


        this.props.getUserProfile(userId);

        // setTimeout(() => {
            this.props.getUserStatus(userId);

        // },2000)

        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
           //
           // usersAPI.getProfile(userId)
           //  .then(response => {
           //      this.props.setUserProfile(response.data)
           //  });
    }




    render() {


        return (
            <div>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateUserStatus={this.props.updateUserStatus}
                />
            </div>
        )
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, {
        getUserProfile,
        getUserStatus,
        updateUserStatus
    }),
        withRouter,
        // withAuthRedirect
    )(ProfileContainer);