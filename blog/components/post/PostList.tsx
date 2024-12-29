import React from "react";
import Post from "../Post";
import { Post as PostType } from "../../asset/type";

const PostList = ({ posts }: { posts: PostType[] }) => {
  return (
    <section className={`flex justify-between`}>
      {posts.map((post) => {
        return (
          <Post
            key={`${post.date}-${post.title}`}
            post={post}
            link={`/post/${post.date}`}
          ></Post>
        );
      })}
    </section>
  );
};

export default PostList;
