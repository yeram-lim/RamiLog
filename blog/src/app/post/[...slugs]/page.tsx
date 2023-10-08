import { getPostBySlug } from "@/lib/getPostApi";
import { MdxContent } from "../../../../components/MdxContent";

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
