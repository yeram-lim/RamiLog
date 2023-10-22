import { getPostBySlug } from "@/lib/getPostApi";
import { MdxContent } from "../../../../components/MdxContent";

const Post = async ({ params }) => {
  const { serialized, frontmatter } = await getPostBySlug(params.postDate);
  const dateString = new Date(frontmatter.date).toLocaleDateString();

  return (
    <section className={`bg-pink-100`}>
      <div className={`flex flex-col justify-center items-center`}>
        <div className={`w-full flex gap-2`}>
          <div>ALL</div>
          <div>Project</div>
          <div>Blog</div>
        </div>
        <div className={`text-3xl font-bold`}>{frontmatter.title}</div>
        <div>{dateString}</div>
        <div>
          <div></div>
          <div>임예람</div>
        </div>
      </div>
      <MdxContent source={serialized}></MdxContent>
    </section>
  );
};

export default Post;
