import React from "react";
import TagFilteringSection from "../tag/TagFilteringSection";
import { getAllPost, getPostsByTag } from "@/lib/getPostApi";
import PostList from "../post/PostList";

const BlogPage = async ({ pickedTag }) => {
  let posts = [];
  if (pickedTag === "ALL") {
    posts = await getAllPost();
  } else {
    posts = await getPostsByTag(pickedTag);
  }

  return (
    <>
      <TagFilteringSection pickedTag={pickedTag}></TagFilteringSection>
      {posts && <PostList posts={posts}></PostList>}
    </>
  );
};

export default BlogPage;
