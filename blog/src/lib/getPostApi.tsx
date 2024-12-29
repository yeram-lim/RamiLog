import path from "path";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import { type MDXRemoteSerializeResult } from "next-mdx-remote";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkBreaks from "remark-breaks";
import remarkToc from "remark-toc";
import { sync } from "glob";

type Frontmatter = {
  title: string;
  date: Date;
  tags: string;
  thumbnail: string;
};

type PostType<TFrontmatter> = {
  serialized: MDXRemoteSerializeResult;
  frontmatter: TFrontmatter;
};

const BASE_PATH = "/contents";

export const getPostBySlug = async (
  slug: string
): Promise<PostType<Frontmatter>> => {
  const mdxPath = path.join(process.cwd(), BASE_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(mdxPath);
  // process.cwd() /Users/lim-yeram/Desktop/yeram/RamiLog/blog
  // mdxPath /Users/lim-yeram/Desktop/yeram/RamiLog/blog/contents/1696291200.mdx
  // source <Buffer >

  // Serialize the MDX content and parse the frontmatter
  const serialized = await serialize(source, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkBreaks, remarkToc],
      rehypePlugins: [
        [rehypePrettyCode, { theme: "slack-dark" }],
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["anchor"],
            },
          },
        ],
      ],
    },
  });
  const frontmatter = serialized.frontmatter as Frontmatter;

  return { serialized, frontmatter };
};

export const getAllPost = async () => {
  const POSTS_PATH = path.join(process.cwd(), BASE_PATH);
  const postPathList: string[] = sync(`${POSTS_PATH}/**/*.mdx`);

  const postInfoList = [];
  for (let i = 0; i < postPathList.length; i++) {
    const source = fs.readFileSync(postPathList[i]);
    const serialized = await serialize(source, {
      parseFrontmatter: true,
    });
    const frontmatter = serialized.frontmatter as Frontmatter;
    postInfoList.push(frontmatter);
  }
  return postInfoList;
};

export const getPostsByTag = async (tag) => {
  const POSTS_PATH = path.join(process.cwd(), BASE_PATH);
  const postPathList: string[] = sync(`${POSTS_PATH}/**/*.mdx`);

  const postInfoList = [];
  for (let i = 0; i < postPathList.length; i++) {
    const source = fs.readFileSync(postPathList[i]);
    const serialized = await serialize(source, {
      parseFrontmatter: true,
    });
    const frontmatter = serialized.frontmatter as Frontmatter;
    const postTagList = frontmatter.tags.split(",");
    if (postTagList.includes(tag)) {
      postInfoList.push(frontmatter);
    }
  }
  return postInfoList;
};

export const getLastestPosts = async () => {
  const POSTS_PATH = path.join(process.cwd(), BASE_PATH);
  const postPathList: string[] = sync(`${POSTS_PATH}/**/*.mdx`);

  const postInfoList = [];
  for (let i = 1; i < 4; i++) {
    const postPath = postPathList[postPathList.length - i];
    console.log(postPath, postPathList);
    const source = fs.readFileSync(postPath);
    const serialized = await serialize(source, {
      parseFrontmatter: true,
    });
    const frontmatter = serialized.frontmatter as Frontmatter;

    postInfoList.push(frontmatter);
  }
  return postInfoList;
};
