import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";


const App = (props) => {

    return (

        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>

            <div className="app-wrapper-content">
                <Routes>



                    <Route
                        path="/profile/:userId?"
                        element={
                            <ProfileContainer
                                // store={props.store}
                                // profilePage={props.state.profilePage}
                                // dispatch={props.dispatch}
                            />
                        }
                    />

                    <Route
                    path="/profile/*"
                    element={
                        <ProfileContainer
                        />
                    }
                />
                    <Route
                        path="/"
                        element={
                            <ProfileContainer
                            />
                        }
                    />

                    <Route
                        path="/dialogs/*"
                        element={
                            <DialogsContainer
                                // store={props.store}

                                // state={props.state.dialogsPage}
                            />
                        }
                    />

                    <Route
                        path="/users/*"
                        element={
                            <UsersContainer/>
                        }
                    />

                    <Route
                        path="/login/*"
                        element={
                            <LoginPage/>
                        }
                    />

                    {/*<Route path="/news" element={<Dialogs/>} />*/}
                    {/*<Route path="/music" element={<Dialogs/>} />*/}
                    {/*<Route path="/settings" element={<Dialogs/>} />*/}


                </Routes>
            </div>
        </div>
    );
}

export default App;
