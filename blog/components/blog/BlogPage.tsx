import React from "react";
import TagFilteringSection from "../tag/TagFilteringSection";
import { getAllPost, getPostsByTag } from "@/lib/getPostApi";
import PostList from "../post/PostList";
import { PostTag } from "../../asset/enum";

const BlogPage = async ({ pickedTag }: { pickedTag: PostTag }) => {
  let posts = [];
  if (pickedTag === null) {
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
