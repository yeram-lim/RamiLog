// "use client";

import path from "path";
import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";

export const getPostBySlug = async (slugs: string) => {
  // const POSTS_PATH = path.join(process.cwd(), "/contents");
  // console.log("process.cwd()", process.cwd());
  const slug = slugs[0];
  const mdxPath = path.join(process.cwd(), "/contents", `${slug}.mdx`);
  // console.log("mdxPath", mdxPath);
  const source = fs.readFileSync(mdxPath);
  // console.log("source", source);

  // process.cwd() /Users/lim-yeram/Desktop/yeram/RamiLog/blog
  // mdxPath /Users/lim-yeram/Desktop/yeram/RamiLog/blog/contents/1696291200.mdx
  // source <Buffer >

  const { content, frontmatter } = await compileMDX({
    source: source,
    options: { parseFrontmatter: true },
    // compiledSource: "",
  });

  return { content, frontmatter };
};

const getData = async (slugs: string) => {
  const mdxSource = await getPostBySlug(slugs);

  return mdxSource;
};

const Post = async ({ params }) => {
  const mdxSource = await getData(params.slugs);
  return (
    <section>
      <div>{mdxSource.content}</div>
    </section>
  );
};

export default Post;
