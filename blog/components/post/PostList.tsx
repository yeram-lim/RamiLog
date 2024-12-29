import React from "react";
import PostCard from "../PostCard";
import { Post as PostType } from "../../asset/type";

const PostList = ({ posts }: { posts: PostType[] }) => {
  return (
    <section className={`flex justify-between`}>
      {posts.map((post) => {
        return (
          <PostCard
            key={`${post.date}-${post.title}`}
            post={post}
            link={`/post/${post.date}`}
          ></PostCard>
        );
      })}
    </section>
  );
};

export default PostList;
