import React from "react";
import css from './FormControls.module.css'
import {maxLengthCreator} from "../../../utils/validators/validators";
import {Field} from "redux-form";



export const FormsControl = ({ input, meta, child, ...props }) => {

    const hasError = meta.touched && meta.error;
    return (
        <span className={ css.formControl + " " + (hasError ? css.error : "") }>
            <span>
                {props.children}
            </span>
            <span>
                { hasError && <span> { meta.error } </span> }

            </span>
        </span>
    );
};

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormsControl {...props}>  <textarea {...input} {...restProps} /></FormsControl>
}
export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormsControl {...props}>  <input {...input} {...restProps} /></FormsControl>
}

export const createField = (placeholder, name, validators, component, props={}, text = "") => (
    <>
        <Field placeholder={placeholder}
               name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </>
    )



/*
export const Element = Element => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={ css.formControl + " " + (hasError ? css.error : "") }>
            <Element {...input} {...props} />
            <div>
                { hasError && <span> { meta.error } </span> }

            </div>
        </div>
    );
};*/
/*


export const Textarea = ({input, meta, ...props}) => {

    const hasError =  meta.touched && meta.error;
    return (
        <div className={css.formControl + ' ' + (hasError ? css.error : '')}>
            <textarea {...input} {...props} />
            <div>
                {
                    hasError ?  <button disabled>Send</button> : <button>Send</button>
                }
                { hasError && <span> {meta.error}</span>}
            </div>
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {

    const hasError =  meta.touched && meta.error;
    return (
        <div className={css.formControl + ' ' + (hasError ? css.error : '')}>
            <input {...input} {...props} />
            <div>
               {/!* {
                    hasError ?  <button disabled>Send</button> : <button>Send</button>
                }*!/}
                { hasError && <span> {meta.error}</span>}
            </div>
        </div>
    )
}*/
