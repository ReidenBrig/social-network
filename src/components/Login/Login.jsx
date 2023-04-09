import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import {mapStateToPropsFactory} from "react-redux/es/connect/mapStateToProps";


const maxLength10 = maxLengthCreator(20);

// const Input = Element("input");

const LoginForm = (props) => {

    return (
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field
                        name={'email'}
                        placeholder={"e-mail"}
                        component={Input}
                        validate={[required, maxLength10]}
                    />
                </div>
                <div>
                    <Field
                        type={"password"}
                        name={'password'}
                        placeholder={"password"}
                        component={Input}
                        validate={[required, maxLength10]}
                    />
                </div>
                <div>
                    <Field
                        name={'rememberMe'}
                        type={"checkbox"}
                        component={Input}
                        validate={[required, maxLength10]}
                    /> Remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Navigate to="/profile" replace={true}/>
    }

    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)
