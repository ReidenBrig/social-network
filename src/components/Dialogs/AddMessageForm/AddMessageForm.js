import {Field, reduxForm} from "redux-form";
import {Element, Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50)

// const Textarea = Element("textarea");


const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                <Field
                    validate={[required, maxLength50]}
                    component={Textarea}
                    name={'newMessageBody'}
                    placeholder='Enter your message'

                />

            </div>
            <div>
                <button>Send</button>
            </div>

        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm',
})(AddMessageForm)

export default AddMessageFormRedux