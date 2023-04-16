import React from "react";
import css from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={css.item}>
      {/*<img src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg" />*/}
        {props.message}

      <div className={css.post}>
          {props.likesCount}
          {/*<span> ❤ </span>*/}
         </div>
    </div>
  );
};

export default Post;
