import React from "react";
import Post from "../Post";

const PostList = ({ posts }) => {
  return (
    <section className={`grid grid-flow-row`}>
      {posts.map((post) => {
        return (
          <Post
            key={post.title}
            imgSrc={null}
            title={post.title}
            link={`/post/${post.date}`}
          ></Post>
        );
      })}
    </section>
  );
};

export default PostList;
