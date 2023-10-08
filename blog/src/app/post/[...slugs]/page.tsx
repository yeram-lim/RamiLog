import path from "path";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import { type MDXRemoteSerializeResult } from "next-mdx-remote";
import { MdxContent } from "../../../../components/MdxContent";

type Frontmatter = {
  title: string;
  date: Date;
};

type PostType<TFrontmatter> = {
  serialized: MDXRemoteSerializeResult;
  frontmatter: TFrontmatter;
};

export const getPostBySlug = async (
  slugs: string
): Promise<PostType<Frontmatter>> => {
  const slug = slugs[0];
  const mdxPath = path.join(process.cwd(), "/contents", `${slug}.mdx`);
  const source = fs.readFileSync(mdxPath);

  // process.cwd() /Users/lim-yeram/Desktop/yeram/RamiLog/blog
  // mdxPath /Users/lim-yeram/Desktop/yeram/RamiLog/blog/contents/1696291200.mdx
  // source <Buffer >

  // Serialize the MDX content and parse the frontmatter
  const serialized = await serialize(source, {
    parseFrontmatter: true,
  });

  const frontmatter = serialized.frontmatter as Frontmatter;

  return { serialized, frontmatter };
};

const Post = async ({ params }) => {
  const { serialized, frontmatter } = await getPostBySlug(params.slugs);
  const dateString = new Date(frontmatter.date).toLocaleDateString();

  return (
    <section>
      <div>
        <h1>{frontmatter.title}</h1>
        <div>
          <div>{dateString}</div>
        </div>
      </div>
      <MdxContent source={serialized}></MdxContent>
    </section>
  );
};

export default Post;
