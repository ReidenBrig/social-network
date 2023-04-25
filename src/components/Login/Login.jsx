import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";

import css from './../common/FormsControls/FormControls.module.css'
import cssLogin from './Login.module.css'



const maxLength10 = maxLengthCreator(20);

// const Input = Element("input");

const LoginForm = ({handleSubmit, error, captchaUrl}) => {

    return (
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit}  >
                {/*<div>
                    {createField('Email', 'email', [required], Input)}

                </div>*/}
                <div>
                    <Field
                        className={cssLogin.loginForm}
                        name={'email'}
                        placeholder={"e-mail"}
                        component={Input}
                        validate={[required, maxLength10]}
                    />
                </div>
                <div>
                    <Field
                        className={cssLogin.loginForm}
                        type={"password"}
                        name={'password'}
                        placeholder={"password"}
                        component={Input}
                        validate={[required, maxLength10]}
                    />
                </div>
                <div>
                    <Field
                        className={cssLogin.loginCheck}
                        name={'rememberMe'}
                        type={"checkbox"}
                        component={Input}
                        validate={[required, maxLength10]}
                    /> Remember me
                </div>

                {
                    captchaUrl && <img src={captchaUrl}/>
                }
                <div>{
                    captchaUrl && createField('Enter symbols from image', 'captcha', [required], Input, {})
                }</div>



                {error && <div className={css.formSummaryError}>
                    {error}
                </div>}

                <div>
                    <button  className={cssLogin.btn}>Login</button>
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
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Navigate to="/profile" replace={true}/>
    }

    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)
