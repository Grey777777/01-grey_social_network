import React from "react";
import avatar from "../../../../images/cate1.jpg";
import cl from "./Post.module.css";

function Post(props) {
  return (
    <div className={cl.comments}>
      <div className={cl.avatar}>
        <img src={avatar} alt="avatar" />
      </div>
      <div className={cl.nextComment}>{props.message}</div>
      <div className={cl.amountLike}>Amount like: {props.like}</div>
    </div>
  );
}

export default Post;
