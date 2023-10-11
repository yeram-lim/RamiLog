import React from "react";
import BlogPage from "../../../../components/blog/BlogPage";

const BlogTagPage = async ({ params }) => {
  return <BlogPage pickedTag={params.tags[0]}></BlogPage>;
};

export default BlogTagPage;
