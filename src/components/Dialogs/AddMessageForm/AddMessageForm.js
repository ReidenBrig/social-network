import {Field, reduxForm} from "redux-form";
import {Element, Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

import css from './../Dialogs.module.css'

const maxLength50 = maxLengthCreator(50)

// const Textarea = Element("textarea");


const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                <Field
                    className={css.form}
                    validate={[required, maxLength50]}
                    component={Textarea}
                    name={'newMessageBody'}
                    placeholder='Enter your message'

                />

            </div>
            <div>
                <button className={css.sendBtn}>Send</button>
            </div>

        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm',
})(AddMessageForm)

export default AddMessageFormRedux