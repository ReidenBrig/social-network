import React from "react";
import css from './FormControls.module.css'



export const FormsControl = ({ input, meta, child, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={ css.formControl + " " + (hasError ? css.error : "") }>
            <div>
                {props.children}
            </div>
            <div>
                { hasError && <span> { meta.error } </span> }

            </div>
        </div>
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
