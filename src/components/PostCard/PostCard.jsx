import React from "react";
import "./styles.css";

export const PostCard = ({ post }) => {
  return (
    <div className="post" key={post.id}>
      <img src={post.cover} alt={post.title} />
      <div className="post-content">
        <h2>
          {post.title} {post.id}
        </h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
};
