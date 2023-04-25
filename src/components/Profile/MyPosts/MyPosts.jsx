import React, {useState} from "react";

import css from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from 'redux-form'
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

// const Textarea = Element("textarea");


const maxLength10 = maxLengthCreator(1000);

let AddNewPostForm = (props) => {
    return (
        <form className={css.postForm} onSubmit={props.handleSubmit}>
            <div className={css.textArea}>
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


//
const MyPosts = React.memo((props) => {
    const [post, setPost] = useState(props.postsData)
    const deletePost = (id) => {
        // debugger
        console.log(props.postsData.filter((item) => item.id !== id))
            // setPost((prevPost) => prevPost.filter((item) => item.id !== id))


    }
    let postsElements =
        props.postsData.map((post) => (
            <Post
                key={post.id}
                message={post.message}
                id={post.id}
                //likesCount={post.likesCount}
                time={post.time}
                deletePost={deletePost}
            />
        ))


    // let newPostElement = React.createRef();

    const onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

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
})


export default MyPosts;