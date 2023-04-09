import React from "react";

import css from './MyPosts.module.css'
import Post from "./Post/Post";
import { Field, reduxForm } from 'redux-form'
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Element} from "../../common/FormsControls/FormsControls";
 import {Textarea} from "../../common/FormsControls/FormsControls";

// const Textarea = Element("textarea");


const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'newPostText'}
                    component={Textarea}
                    placeholder={'Enter your post'}
                    validate={[required, maxLength10]}
                />

            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

AddNewPostForm = reduxForm({
    form: 'ProfileAddNewPostForm',
})(AddNewPostForm)


const MyPosts = (props) => {
    let postsElements =
        props.postsData.map((post) => (
            <Post message={post.message} id={post.id} likesCount={post.likesCount}/>
        ))

    let newPostElement = React.createRef();

    const onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    // const onPostChange = () => {
    //     let text = newPostElement.current.value;
    //     props.updateNewPostText(text);
    // }

    return (

        <div className={css.postsBlock}>
            <div>
                <h3>My posts</h3>
            </div>
            <AddNewPostForm onSubmit={onAddPost}/>
            <div className={css.posts}>
                {
                    postsElements
                }
            </div>

        </div>
    )
}


export default MyPosts;