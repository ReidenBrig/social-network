import React from "react";

import css from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";





const MyPosts = (props) => {

    let newPostElement = React.createRef();

    const handleAddPost = () => {
        // props.addPost();
        props.dispatch( addPostActionCreator() );
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        // props.updateNewPostText(text);
        props.dispatch( updateNewPostTextActionCreator(text) );

    }

    return (
        <div className={css.postsBlock}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <div>
                    <textarea
                        onChange={ onPostChange }
                        ref={newPostElement}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={handleAddPost}
                            type="button">
                        Add post
                    </button>
                </div>
            </div>
            <div className={css.posts}>
                {
                    props.postsData.map((post) => (
                        <Post message={post.message} id={post.id} likesCount={post.likesCount}/>
                    ))
                }
            </div>

        </div>


    )

}

export default MyPosts;