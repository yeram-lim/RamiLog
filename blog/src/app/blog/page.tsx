import { getAllPost } from "@/lib/getPostApi";
import React from "react";
import Post from "../../../components/Post";

const BlogPage = async () => {
  const posts = await getAllPost();
  return (
    <>
      <section>BlogPage</section>
      {posts && (
        <section className={`grid grid-flow-row`}>
          {posts.map((post) => {
            return (
              <Post
                imgSrc={null}
                title={post.title}
                link={`/post/${post.date}`}
              ></Post>
            );
          })}
        </section>
      )}
    </>
  );
};

export default BlogPage;
