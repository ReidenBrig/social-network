import React, {useState} from "react";
import css from "./Post.module.css";

const Post = (props) => {

    //
    // // let dateNow = new Date();
    // let year = dateNow.getFullYear()
    // let month = dateNow.getMonth()
    // let day = dateNow.getDate()
    // let hours = dateNow.getHours()
    // let minutes = dateNow.getMinutes()
    //
    //
    // let fullDate = `${year}/${month}/${day} ${hours}:${minutes}`


    return (
        <div className={css.item}>
            {/*<img src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg" />*/}
            <div>
                {props.message}
            </div>
            <div>
                {props.time}
                {/*{fullDate}*/}
                {/*{`${date.getFullYear()}/${date.getMonth()}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`}*/}
            </div>

            <div className={css.post}>
                {/*{props.likesCount}*/}
                {/*<span> ❤ </span>*/}
            </div>
            {/*<button onClick={() => props.deletePost(props.id)}>Del</button>*/}
        </div>
    );
};

export default Post;
