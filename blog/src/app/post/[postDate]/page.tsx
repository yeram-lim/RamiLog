import { getPostBySlug } from "@/lib/getPostApi";
import { MdxContent } from "../../../../components/MdxContent";
import Image from "next/image";
import TableOfContent from "../../../../components/post/TableOfContent";

const Post = async ({ params }) => {
  const { serialized, frontmatter } = await getPostBySlug(params.postDate);
  const { thumbnail, title, tags: tagsString } = frontmatter;
  const tags = tagsString.split(",");
  const dateString = new Date(frontmatter.date).toLocaleDateString();

  return (
    <>
      <article className={``}>
        <section
          className={`title-section flex flex-col justify-between gap-4 items-center py-4 px-2 border-b-[2px] border-solid border-gray-100`}
        >
          <div className="w-full">
            <div className={`text-3xl font-bold w-full py-2`}>{title}</div>

            <div className={`flex justify-between w-full`}>
              <div>임예람</div>
              <div>{dateString}</div>
            </div>
          </div>

          <div className={`w-full flex gap-2 justify-end`}>
            {tags.map((tag) => (
              <div className={`text-gray-600 py-1 font-normal`}># {tag}</div>
            ))}
          </div>
        </section>

        <section className="thumbnail-section max-w-[80%] w-[35rem] h-[20rem] mx-auto my-8 relative">
          <Image src={thumbnail} layout="fill" alt={`${title}-썸네일`} />
        </section>

        <MdxContent source={serialized}></MdxContent>
      </article>
      <TableOfContent />
    </>
  );
};

export default Post;
