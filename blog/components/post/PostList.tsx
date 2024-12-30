import React from "react";
import PostCard from "../PostCard";
import { Post as PostType } from "../../asset/type";

const PostList = ({ posts }: { posts: PostType[] }) => {
  return (
    <section className={`flex flex-wrap gap-4`}>
      {posts.map((post) => {
        return (
          <div
            className="flex justify-center flex-grow w-[30%] max-w-[33%]"
            key={`${post.date}-${post.title}`}
          >
            <PostCard post={post} link={`/post/${post.date}`}></PostCard>
          </div>
        );
      })}
    </section>
  );
};

export default PostList;
