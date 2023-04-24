import './App.css';
import React from "react";
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, Routes, useLocation, useNavigate, useParams} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloder/Preloader";
import store from "./redux/redux-store";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route
                            path="/profile/:userId?"
                            element={<ProfileContainer/>}/>
                        <Route
                            path="/profile/*"
                            element={<ProfileContainer/>}/>
                        <Route
                            path="/"
                            element={<ProfileContainer/>}/>

                        <Route
                            path="/dialogs/*"
                            element={<DialogsContainer/>}/>

                        <Route
                            path="/users/*"
                            element={<UsersContainer/>}/>

                        <Route
                            path="/login/*"
                            element={<LoginPage/>}/>

                        {/*<Route path="/news" element={<Dialogs/>} />*/}
                        {/*<Route path="/music" element={<Dialogs/>} />*/}
                        {/*<Route path="/settings" element={<Dialogs/>} />*/}
                    </Routes>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);

let MainApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}
export default MainApp;